import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navMode, setNavMode] = useState('desktop');
  const dropdownRef = useRef();
  const navRef = useRef();
  const contentRef = useRef();

  // NDTV-style responsive detection with smart mobile switching
  useEffect(() => {
    const checkNavigationMode = () => {
      if (navRef.current && contentRef.current) {
        const navWidth = navRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const hasOverflow = contentWidth > navWidth + 30; // Tighter buffer like NDTV

        let newMode = 'desktop';
        if (navWidth < 480) { // Mobile-first approach like NDTV
          newMode = 'mobile-compact';
        } else if (navWidth < 768 || hasOverflow) { // Earlier mobile switch
          newMode = 'mobile';
        } else if (navWidth < 1200) { // Larger tablet range
          newMode = 'tablet';
        }

        if (newMode !== navMode) {
          setNavMode(newMode);
          if (newMode !== 'desktop') {
            setIsMenuOpen(false);
            setOpenDropdown(null);
          }
        }
      }
    };

    const initialCheck = () => setTimeout(checkNavigationMode, 50);
    initialCheck();

    const resizeObserver = new ResizeObserver(checkNavigationMode);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    const handleResize = () => setTimeout(checkNavigationMode, 10);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [navMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const getNavClasses = () => {
    const baseClasses = "bg-gradient-to-r from-white via-blue-50/80 to-cyan-50/80 shadow-2xl sticky top-0 z-50 backdrop-blur-xl border-b border-cyan-200/50 transition-all duration-500";
    return baseClasses + ((navMode === 'mobile' || navMode === 'mobile-compact') ? ' overflow-hidden' : ''); // NDTV-style hidden overflow
  };

  const getContainerClasses = () => {
    switch (navMode) {
      case 'mobile-compact':
        return "max-w-full mx-auto px-2 sm:px-3"; // Better mobile padding like NDTV
      case 'mobile':
        return "max-w-full mx-auto px-3 sm:px-4";
      case 'tablet':
        return "max-w-6xl mx-auto px-4 lg:px-6";
      default:
        return "max-w-7xl mx-auto px-4 lg:px-6";
    }
  };

  const getLogoClasses = () => {
    switch (navMode) {
      case 'mobile-compact':
        return "h-8 w-auto"; // Professional mobile size like NDTV
      case 'mobile':
        return "h-9 w-auto";
      case 'tablet':
        return "h-10 sm:h-12 w-auto";
      default:
        return "h-12 sm:h-14 lg:h-16 w-auto";
    }
  };

  const getTextClasses = () => {
    switch (navMode) {
      case 'mobile-compact':
        return "text-sm font-medium"; // NDTV-style font weight
      case 'mobile':
        return "text-sm font-medium";
      case 'tablet':
        return "text-sm lg:text-base font-medium";
      default:
        return "text-base lg:text-lg font-medium";
    }
  };

  const getSpacingClasses = () => {
    switch (navMode) {
      case 'mobile-compact':
        return "space-x-1"; // Optimized spacing like NDTV
      case 'mobile':
        return "space-x-2";
      case 'tablet':
        return "space-x-3 lg:space-x-4";
      default:
        return "space-x-4 lg:space-x-6 xl:space-x-8";
    }
  };

  const getPaddingClasses = () => {
    switch (navMode) {
      case 'mobile-compact':
        return "px-2 py-1.5"; // NDTV-style compact padding
      case 'mobile':
        return "px-3 py-2";
      case 'tablet':
        return "px-3 lg:px-4 py-2";
      default:
        return "px-4 lg:px-5 py-2.5";
    }
  };

  const isInMobileMode = navMode === 'mobile' || navMode === 'mobile-compact';

  return (
    <nav ref={navRef} className={getNavClasses()}>
      <div className={getContainerClasses()}>
        <div className="flex justify-between items-center h-14 lg:h-16 xl:h-20"> {/* NDTV-style height */}
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 font-bold group flex-shrink-0 transform transition-all duration-300 hover:scale-105" onClick={closeMenu}>
              <div className="flex items-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                <Image 
                  src="/images/Afiyan_07122023-02.png" 
                  alt="AFIYAN IT Logo" 
                  width={navMode === 'mobile-compact' ? 100 : navMode === 'mobile' ? 110 : 140} 
                  height={navMode === 'mobile-compact' ? 50 : navMode === 'mobile' ? 55 : 70} // NDTV-style responsive sizing
                  className={`${getLogoClasses()} object-contain rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 relative z-10`}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation (hidden in mobile) */}
          {!isInMobileMode && (
            <div ref={contentRef} className={`flex items-center ${getSpacingClasses()} flex-wrap`} {...dropdownRef}>
              <Link href="/" legacyBehavior>
                <a className={`relative ${getPaddingClasses()} text-cyan-600 transition-all duration-300 font-semibold border-b-3 border-cyan-500 ${getTextClasses()} whitespace-nowrap group overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-100 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </span>
                </a>
              </Link>

              {/* Services Dropdown */}
              <div
                className="dropdown relative"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`relative ${getPaddingClasses()} text-gray-700 hover:text-cyan-600 transition-all duration-300 font-semibold group flex items-center focus:outline-none ${getTextClasses()} whitespace-nowrap overflow-hidden`}
                  onClick={() => handleDropdown('services')}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'services'}
                  type="button"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                    Services
                  </span>
                  <svg className={`w-4 h-4 ml-2 relative z-10 transition-all duration-300 ${openDropdown === 'services' ? 'rotate-180 text-cyan-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
                <div
                  className={`dropdown-content-professional absolute left-0 mt-3 min-w-[280px] lg:min-w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-200/50 z-50 transform transition-all duration-300 ${openDropdown === 'services' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-2xl"></div>
                  <div className="relative z-10 p-2">
                    <a href="#consulting" className="dropdown-item-professional group relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center p-4">
                        <span className="text-emerald-600 mr-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">🎯</span>
                        <div>
                          <div className={`font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 ${navMode === 'tablet' ? 'text-sm' : 'text-base'}`}>Strategic Consulting</div>
                          <div className="text-xs text-gray-500 mt-1">Expert guidance for your business</div>
                        </div>
                      </div>
                    </a>
                    <a href="#implementation" className="dropdown-item-professional group relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center p-4">
                        <span className="text-blue-600 mr-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">⚙️</span>
                        <div>
                          <div className={`font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 ${navMode === 'tablet' ? 'text-sm' : 'text-base'}`}>Implementation Services</div>
                          <div className="text-xs text-gray-500 mt-1">End-to-end solution deployment</div>
                        </div>
                      </div>
                    </a>
                    <a href="#training" className="dropdown-item-professional group relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center p-4">
                        <span className="text-amber-600 mr-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">📖</span>
                        <div>
                          <div className={`font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 ${navMode === 'tablet' ? 'text-sm' : 'text-base'}`}>Training & Enablement</div>
                          <div className="text-xs text-gray-500 mt-1">Skill development programs</div>
                        </div>
                      </div>
                    </a>
                    <a href="#support" className="dropdown-item-professional group relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center p-4">
                        <span className="text-red-600 mr-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">🛠️</span>
                        <div>
                          <div className={`font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 ${navMode === 'tablet' ? 'text-sm' : 'text-base'}`}>Managed Services</div>
                          <div className="text-xs text-gray-500 mt-1">24/7 support & maintenance</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div
                className="dropdown relative"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`relative ${getPaddingClasses()} text-gray-700 hover:text-cyan-600 transition-all duration-300 font-semibold group flex items-center focus:outline-none ${getTextClasses()} whitespace-nowrap overflow-hidden`}
                  onClick={() => handleDropdown('products')}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'products'}
                  type="button"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                    Products
                  </span>
                  <svg className={`w-4 h-4 ml-2 relative z-10 transition-all duration-300 ${openDropdown === 'products' ? 'rotate-180 text-cyan-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
                <div className={`dropdown-content-professional absolute left-0 mt-3 min-w-[250px] lg:min-w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-200/50 z-50 transform transition-all duration-300 ${openDropdown === 'products' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-2xl"></div>
                  <div className="relative z-10 p-2">
                    <Link href="/data-governance" legacyBehavior>
                      <a className="dropdown-item-professional group relative overflow-hidden rounded-xl block">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center p-4">
                          <div className="mr-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Image src="/images/DataMind.png" alt="Data Mind" width={20} height={20} className="object-contain" />
                          </div>
                          <div>
                            <div className={`font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 ${navMode === 'tablet' ? 'text-sm' : 'text-base'}`}>Data Mind</div>
                            <div className="text-xs text-gray-500 mt-1">Advanced data governance solutions</div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <a href="#contact" className="relative px-3 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center text-sm overflow-hidden group border border-cyan-300/30 flex-shrink-0 min-w-max">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <span className="relative z-10 flex items-center font-semibold whitespace-nowrap text-nowrap">
                  <div className="w-4 h-4 mr-2 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-white/35 transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="inline-block">Contact&nbsp;Us</span>
                  <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </span>
              </a>
            </div>
          )}

          {/* Mobile Hamburger Button - Premium Style */}
          {isInMobileMode && (
            <button
              className="flex flex-col justify-center items-center w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/50 cursor-pointer focus:outline-none flex-shrink-0 hover:from-cyan-100 hover:to-blue-100 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative">
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} shadow-sm`}></span>
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 ease-out my-1.5 ${isMenuOpen ? 'opacity-0' : ''} shadow-sm`}></span>
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} shadow-sm`}></span>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu - Premium Style */}
        {isInMobileMode && (
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-200/50 mt-3 mx-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-blue-50/30 rounded-2xl"></div>
              <div className="relative z-10 p-2">
                {/* Mobile Home - Premium Style with Dropdown */}
                <div className="border-b border-gray-200/50 mx-4">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-cyan-600 hover:text-cyan-700 transition-all duration-300 font-bold focus:outline-none text-left text-lg group relative overflow-hidden rounded-xl"
                    onClick={() => handleDropdown('home-mobile')}
                    aria-expanded={openDropdown === 'home-mobile'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Home
                    </div>
                    <svg className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${openDropdown === 'home-mobile' ? 'rotate-180 text-cyan-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === 'home-mobile' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50/30 px-8 py-3 rounded-xl mx-2 mb-2 space-y-2">
                      <Link href="/" legacyBehavior>
                        <a className="flex items-center py-3 text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                              </svg>
                            </div>
                            Homepage
                          </div>
                        </a>
                      </Link>
                      <Link href="/ai-code-generator" legacyBehavior>
                        <a className="flex items-center py-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            AI Code Generator
                          </div>
                        </a>
                      </Link>
                      <Link href="/custom-sdks" legacyBehavior>
                        <a className="flex items-center py-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            Custom SDKs
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Services - Premium Style */}
                <div className="border-b border-gray-200/50 mx-4">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-gray-700 hover:text-cyan-600 transition-all duration-300 font-bold focus:outline-none text-left text-lg group relative overflow-hidden rounded-xl"
                    onClick={() => handleDropdown('services-mobile')}
                    aria-expanded={openDropdown === 'services-mobile'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                      Services
                    </div>
                    <svg className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${openDropdown === 'services-mobile' ? 'rotate-180 text-cyan-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === 'services-mobile' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50/30 px-8 py-3 space-y-3 rounded-xl mx-2 mb-2">
                      <a href="#consulting" className="block py-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center">
                          <span className="text-emerald-600 mr-3 text-xl">🎯</span>
                          Strategic Consulting
                        </div>
                      </a>
                      <a href="#implementation" className="block py-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center">
                          <span className="text-blue-600 mr-3 text-xl">⚙️</span>
                          Implementation Services
                        </div>
                      </a>
                      <a href="#training" className="block py-3 text-gray-600 hover:text-amber-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center">
                          <span className="text-amber-600 mr-3 text-xl">📖</span>
                          Training & Enablement
                        </div>
                      </a>
                      <a href="#support" className="block py-3 text-gray-600 hover:text-red-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center">
                          <span className="text-red-600 mr-3 text-xl">🛠️</span>
                          Managed Services
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Products - Premium Style */}
                <div className="border-b border-gray-200/50 mx-4">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-gray-700 hover:text-cyan-600 transition-all duration-300 font-bold focus:outline-none text-left text-lg group relative overflow-hidden rounded-xl"
                    onClick={() => handleDropdown('products-mobile')}
                    aria-expanded={openDropdown === 'products-mobile'}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                      Products
                    </div>
                    <svg className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${openDropdown === 'products-mobile' ? 'rotate-180 text-cyan-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === 'products-mobile' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50/30 px-8 py-3 rounded-xl mx-2 mb-2">
                      <Link href="/data-governance" legacyBehavior>
                        <a className="flex items-center py-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 text-base font-semibold group relative overflow-hidden rounded-lg px-3" onClick={closeMenu}>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <Image src="/images/DataMind.png" alt="Data Mind" width={18} height={18} className="object-contain" />
                            </div>
                            Data Mind
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Contact Us - Consistent Premium Style */}
                <div className="px-4 py-3 mt-3">
                  <a 
                    href="#contact" 
                    className="block w-full text-center relative overflow-hidden rounded-lg group transform transition-all duration-300 hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 shadow-lg hover:shadow-xl"
                    onClick={closeMenu}
                  >
                    {/* Simple overlay for consistent styling */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    {/* Button content - Clean and Consistent */}
                    <div className="relative z-10 px-6 py-3 flex items-center justify-center">
                      <div className="w-5 h-5 mr-2 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-white/35 transition-colors duration-300">
                        <svg className="w-3 h-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-base whitespace-nowrap text-nowrap inline-block">Contact&nbsp;Us</span>
                      <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}