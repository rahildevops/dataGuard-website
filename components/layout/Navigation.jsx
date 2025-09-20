import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
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
                priority
              />
            </div>
          </a>
        </Link>
        <div className="flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="relative px-4 py-2 text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
              <span className="relative z-10">Home</span>
            </a>
          </Link>
          {/* Solutions removed per request */}
          <div className="dropdown">
            <a href="#services" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
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
            <a href="#products" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
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
          <a href="#contact" className="relative px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full shadow-md flex items-center">
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}