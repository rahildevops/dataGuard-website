import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationIndex() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const mobileRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    function onDoc(e) {
      if (!navRef.current) return;
      if (openDropdown && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [openDropdown]);

  return (
    <nav className="relative bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-gray-800 text-xl md:text-2xl font-bold mb-0 group">
            <div className="flex items-center">
              <Image
                src="/images/Afiyan_07122023-02.png"
                alt="AFIYAN IT Logo"
                width={120}
                height={60}
                className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                priority
              />
            </div>
          </a>
        </Link>

  {/* Desktop links */}
  <div className="hidden md:flex flex-row items-center space-x-6" ref={navRef}>
          <Link href="/" legacyBehavior>
            <a className="px-4 py-2 text-sm md:text-base text-cyan-600 font-medium border-b-2 border-cyan-500">Home</a>
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
              className="px-4 py-2 text-sm md:text-base text-gray-700 hover:text-cyan-600 font-medium flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className={`absolute left-0 mt-2 min-w-[220px] bg-white rounded-xl shadow-lg border border-cyan-100 ${openDropdown === 'services' ? '' : 'hidden'}`} style={{zIndex: 60}}>
              <a href="#consulting" className="dropdown-item-professional">Strategic Consulting</a>
              <a href="#implementation" className="dropdown-item-professional">Implementation Services</a>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'products'}
              className="px-4 py-2 text-sm md:text-base text-gray-700 hover:text-cyan-600 font-medium flex items-center"
            >
              Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className={`absolute left-0 mt-2 min-w-[200px] bg-white rounded-xl shadow-lg border border-cyan-100 ${openDropdown === 'products' ? '' : 'hidden'}`} style={{zIndex: 60}}>
              <Link href="/data-governance" legacyBehavior>
                <a className="dropdown-item-professional flex items-center"><span className="mr-3" style={{width:28,height:28}}><Image src="/images/DataMind.png" alt="Data Mind" width={28} height={28} className="object-contain"/></span>Data Mind</a>
              </Link>
            </div>
          </div>

          <a href="#contact" className="px-4 py-2 text-sm md:text-base text-white bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-md">Contact Us</a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center" ref={mobileRef}>
          <button aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)} className="p-2 rounded-md bg-white/60 hover:bg-white/80 border border-gray-200">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-200 ${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'}`} style={{ top: '100%' }}>
        <div className="px-3 py-2">
          <Link href="/" legacyBehavior><a onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-700">Home</a></Link>
          <details className="py-0">
            <summary className="list-none cursor-pointer py-2 font-medium text-sm text-gray-700">Services</summary>
            <nav className="pl-3">
              <a href="#consulting" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Strategic Consulting</a>
            </nav>
          </details>
          <details className="py-0">
            <summary className="list-none cursor-pointer py-2 font-medium text-sm text-gray-700">Products</summary>
            <nav className="pl-3">
              <Link href="/data-governance" legacyBehavior><a onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Data Mind</a></Link>
            </nav>
          </details>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 py-2 text-sm text-white bg-cyan-600 text-center rounded-md">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
