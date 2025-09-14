import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationAICodeGen() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  // Close dropdown on click outside
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

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-gray-800 text-xl md:text-2xl font-bold mb-2 md:mb-0 group">
            <div className="flex items-center">
              <Image 
                src="/images/Afiyan_07122023-02.png" 
                alt="AFIYAN IT Logo" 
                width={120} 
                height={60}
                className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                style={{display: 'block'}}
                priority
              />
            </div>
          </a>
        </Link>
        <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6 items-center mt-4 md:mt-0 overflow-x-hidden" ref={dropdownRef}>
          <Link href="/" legacyBehavior>
            <a className="relative px-4 py-2 text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
              <span className="relative z-10">Home</span>
            </a>
          </Link>
          {/* Solutions Dropdown */}
          <div
            className="dropdown relative"
            onMouseEnter={() => setOpenDropdown('solutions')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center focus:outline-none"
              onClick={() => handleDropdown('solutions')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'solutions'}
              type="button"
            >
              <span className="relative z-10">Solutions</span>
              <svg className={`w-4 h-4 ml-1 relative z-10 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </button>
            <div
              className={`dropdown-content-professional absolute left-0 mt-2 min-w-[260px] bg-white rounded-xl shadow-lg border border-cyan-100 z-50 ${openDropdown === 'solutions' ? '' : 'hidden'}`}
            >
              <a href="#deployment" className="dropdown-item-professional">
                <span className="text-blue-600 mr-3">⚡</span>
                <div className="font-medium">Deployment Accelerator</div>
              </a>
              <a href="#sdks" className="dropdown-item-professional">
                <span className="text-cyan-600 mr-3">📚</span>
                <div className="font-medium">Custom SDK&apos;s</div>
              </a>
              <Link href="/ai-code-generator/" legacyBehavior>
                <a className="dropdown-item-professional">
                  <span className="text-purple-600 mr-3">🤖</span>
                  <div className="font-medium">AI Code Generator</div>
                </a>
              </Link>
              <a href="#migration" className="dropdown-item-professional">
                <span className="text-green-600 mr-3">🔄</span>
                <div className="font-medium">Migration Automation Kit</div>
              </a>
            </div>
          </div>
          {/* Services Dropdown */}
          <div
            className="dropdown relative"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center focus:outline-none"
              onClick={() => handleDropdown('services')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
              type="button"
            >
              <span className="relative z-10">Services</span>
              <svg className={`w-4 h-4 ml-1 relative z-10 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </button>
            <div
              className={`dropdown-content-professional absolute left-0 mt-2 min-w-[260px] bg-white rounded-xl shadow-lg border border-cyan-100 z-50 ${openDropdown === 'services' ? '' : 'hidden'}`}
            >
              <a href="#consulting" className="dropdown-item-professional">
                <span className="text-emerald-600 mr-3">🎯</span>
                <div className="font-medium">Strategic Consulting</div>
              </a>
              <a href="#implementation" className="dropdown-item-professional">
                <span className="text-blue-600 mr-3">⚙️</span>
                <div className="font-medium">Implementation Services</div>
              </a>
              <a href="#training" className="dropdown-item-professional">
                <span className="text-amber-600 mr-3">📖</span>
                <div className="font-medium">Training & Enablement</div>
              </a>
              <a href="#support" className="dropdown-item-professional">
                <span className="text-red-600 mr-3">🛠️</span>
                <div className="font-medium">Managed Services</div>
              </a>
            </div>
          </div>
          <a href="#about" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group w-full md:w-auto text-center">
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
          </a>
          <a href="#contact" className="relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg w-full md:w-auto text-center">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
