import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const router = useRouter();
  const disableMobileScroll = router && (router.pathname === '/data-governance' || router.pathname === '/data-governance/');

  return (
    <nav className="relative bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl md:sticky md:top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
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
  <div className="hidden md:flex flex-row items-center space-x-6 overflow-y-visible whitespace-nowrap">
          <Link href="/" legacyBehavior>
            <a className="relative px-4 py-2 text-sm md:text-base text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
              <span className="relative z-10">Home</span>
            </a>
          </Link>
          {/* Solutions removed per request */}
          <div className="dropdown">
            <a href="#services" className="relative px-4 py-2 text-sm md:text-base text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
              <span className="relative z-10">Services</span>
              <svg className="w-4 h-4 ml-1 relative z-10 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </a>
            <div className="dropdown-content-professional">
              <a href="#consulting" className="dropdown-item-professional">
                <span className="text-emerald-600 mr-3">🎯</span>
                <div className="font-medium">Strategic Consulting</div>
              </a>
              <a href="#implementation" className="dropdown-item-professional">
                <span className="text-blue-600 mr-3">⚙️</span>
                <div className="font-medium">Implementation Services</div>
              </a>
              <a href="#training" className="dropdown-item-professional">
                <span className="text-amber-600 mr-3">�</span>
                <div className="font-medium">Training & Enablement</div>
              </a>
              <a href="#support" className="dropdown-item-professional">
                <span className="text-red-600 mr-3">�️</span>
                <div className="font-medium">Managed Services</div>
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#products" className="relative px-4 py-2 text-sm md:text-base text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
              <span className="relative z-10">Products</span>
              <svg className="w-4 h-4 ml-1 relative z-10 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </a>
            <div className="dropdown-content-professional">
              <Link href="/data-governance" legacyBehavior>
                <a className="dropdown-item-professional flex items-center">
                  <span className="mr-3" style={{width: 28, height: 28}}>
                    <Image src="/images/DataMind.png" alt="Data Mind" width={28} height={28} className="object-contain" />
                  </span>
                  <div className="font-medium">Data Mind</div>
                </a>
              </Link>
            </div>
          </div>
          <a href="#contact" className="relative inline-block px-4 py-2 text-sm md:text-base text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full shadow-md flex items-center">
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center" ref={mobileRef}>
          <button aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)} className="p-2 rounded-md bg-white/60 hover:bg-white/80 border border-gray-200">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel (stacked, up to 3 lines visible) */}
  <div className={`md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-200 ${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'}`} style={{ top: '100%' }}>
  <div className="relative">
          {/* top fade */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-6 bg-gradient-to-b from-white/95 to-transparent" />
          <div className="px-3 py-2">
            <a href="#" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-700 font-medium">Home</a>
            <details className="py-0">
              <summary className="list-none cursor-pointer py-2 font-medium text-sm text-gray-700">Services</summary>
              <nav className="pl-3">
                <a href="#consulting" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Strategic Consulting</a>
                <a href="#implementation" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Implementation Services</a>
                <a href="#training" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Training & Enablement</a>
                <a href="#support" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Managed Services</a>
              </nav>
            </details>
            <details className="py-0">
              <summary className="list-none cursor-pointer py-2 font-medium text-sm text-gray-700">Products</summary>
              <nav className="pl-3">
                <Link href="/data-governance" legacyBehavior>
                  <a onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Data Mind</a>
                </Link>
              </nav>
            </details>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 py-2 text-sm text-white bg-cyan-600 text-center rounded-md">Contact Us</a>
          </div>
          {/* bottom fade */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white/95 to-transparent" />
        </div>
      </div>
    </nav>
  );
}