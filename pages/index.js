import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo, useRef } from 'react';

export default function Home() {
  // Hide scrollbar with custom CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  // Services data - exactly from your HTML

  const services = useMemo(() => ([
    {
      title: "CIAM",
      description: "We engineer secure, scalable customer identity platforms with a focus on automation and advanced deployment strategies.",
      features: [
        { name: "Advanced CI/CD Pipelines with Automated Product Deployment" },
        { name: "Comprehensive React and Flutter SDK Framework Development" },
        { name: "Proactive Security Integration with Fraud Prevention Tools" },
        { name: "Seamless On-Premise to Cloud Migration Services" },
        { name: "Extensible Custom Code Library for Unique Use Cases" }
      ],
      iconGradient: "from-indigo-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`
    },
    {
      title: "Workforce IAM",
      description: "Streamline identity and access management for your employees, contractors, and partners while bolstering security and ensuring regulatory compliance.",
      features: [
        { name: "Automated Zero-Touch Employee Onboarding and Offboarding" },
        { name: "Role-Based Access Control with SOX GDPR Compliance" },
        { name: "Centralized Identity Store with Lifecycle Management Automation" }
      ],
      iconGradient: "from-cyan-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`
    },
    {
      title: "PAM",
      description: "Protect your most critical assets and data by securing, managing, and monitoring all privileged accounts and administrative sessions.",
      features: [
        { name: "Automated Privileged Account Discovery and Secure Vault Management" },
        { name: "Full Session Recording with Real-Time Monitoring and Analysis" },
        { name: "Just-in-Time Access with Zero Standing Privilege Implementation" }
      ],
      iconGradient: "from-red-500 to-orange-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"></path>`
    },
    {
      title: "DevOps for IAM",
      description: "CI/CD pipelines, infrastructure as code, and deployment workflows for identity platforms to ensure repeatable, secure, and auditable rollouts.",
      features: [
        { name: "Infrastructure as Code for Identity Services" },
        { name: "Automated Blue/Green & Canary Deployments" },
        { name: "Secure Secrets Management & Vault Integration" }
      ],
      iconGradient: "from-sky-500 to-cyan-500",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18M5 7v10"/>`
    },
    {
      title: "API Security",
      description: "Protect your digital ecosystem with a robust API security framework, providing real-time threat detection and intelligent response capabilities.",
      features: [
        { name: "AI-Powered Machine Learning for Real-Time Threat Detection" },
        { name: "Comprehensive API Discovery and Vulnerability Assessment Services" },
        { name: "Dynamic Risk Scoring with Adaptive Security Policies" }
      ],
      iconGradient: "from-purple-500 to-indigo-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
    },
    {
      title: "Data Governance",
      description: "Design and implement governance frameworks that manage data lineage, classification, access controls, and compliance across identity and API ecosystems.",
      features: [
        { name: "Data Classification & Access Policies" },
        { name: "Lineage, Auditing & Compliance Reporting" },
        { name: "Integration with Identity & Access Controls" }
      ],
      iconGradient: "from-emerald-500 to-teal-500",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20M2 12h20M5 5l14 14"/>`
    },
    {
      title: "Fraud Prevention",
      description: "Advanced fraud detection and prevention solutions using AI-powered behavioral analytics to protect against sophisticated threats and fraudulent activities.",
      features: [
        { name: "AI-Powered Behavioral Analytics for User Pattern Recognition" },
        { name: "Real-Time Risk Assessment with Instant Fraud Alert Systems" },
        { name: "Adaptive Authentication Systems that Adjust to Risk Levels" }
      ],
      iconGradient: "from-emerald-500 to-teal-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
    },
    {
      title: "Prompt Engineering",
      description: "Specialized AI prompt engineering services to optimize large language models for security, identity management, and enterprise automation solutions.",
      features: [
        { name: "Custom AI Model Training and Optimization for Security" },
        { name: "Security-Focused AI Automation for Threat Response Workflows" },
        { name: "Enterprise AI Integration with Existing Security Infrastructure" }
      ],
      iconGradient: "from-yellow-500 to-amber-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>`
    },
  ]), []);

  const servicesRowRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Flatten all platforms into a single array for smooth auto-scroll
  const allPlatforms = useMemo(() => [
    { name: "ForgeRock", logo: "/images/ping.png" },
    { name: "Okta", logo: "/images/okta.png" },
    { name: "Entra ID", logo: "/images/Microsoft-entraid.png" },
    { name: "IBM Security Verify", logo: "/images/IBM.png" },
    { name: "SailPoint", logo: "/images/sailpoint.png" },
    { name: "Saviynt", logo: "/images/saviynt.jpeg" },
    { name: "One Identity", logo: "/images/one-ideneity.png" },
    { name: "Keycloak", logo: "/images/keycloak.png" },
    { name: "CyberArk", logo: "/images/cyberark.png" },
    { name: "BeyondTrust", logo: "/images/beyondtrust.png" },
    { name: "Delinea", logo: "/images/delinea.jpeg" },
    { name: "Arcon", logo: "/images/arcon.png" }
  ], []);

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const platformIndexRef = useRef(0);
  const platformIntervalRef = useRef(null);
  const groupCount = Math.max(1, Math.ceil(allPlatforms.length / 4));
  // Our Services auto-scroll every 5 seconds (using requestAnimationFrame)
  useEffect(() => {
    let frameId;
    let lastTime = performance.now();
    function tick(now) {
      if (now - lastTime >= 5000) {
        setCurrentServiceIndex(prev => (prev + 1) % services.length);
        lastTime = now;
      }
      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [services.length]);

  // Technology Partners auto-scroll every 2 seconds (scrolls by 4)
  // Technology Partners auto-scroll every 2 seconds (using requestAnimationFrame)
  useEffect(() => {
    setCurrentPlatformIndex(0);
    platformIndexRef.current = 0;
    let frameId;
    let lastTime = performance.now();
    function tick(now) {
      const latestGroupCount = Math.max(1, Math.ceil(allPlatforms.length / 4));
      if (now - lastTime >= 2000) {
        platformIndexRef.current = (platformIndexRef.current + 1) % latestGroupCount;
        setCurrentPlatformIndex(platformIndexRef.current);
        console.log('Technology Partners scroll', new Date().toLocaleTimeString(), 'index:', platformIndexRef.current, 'groupCount:', latestGroupCount);
        lastTime = now;
      }
      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextService = () => {
    setCurrentServiceIndex(prev => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex(prev => (prev - 1 + services.length) % services.length);
  };

  const nextPlatform = () => {
    setCurrentPlatformIndex(prev => ((prev + 1) % groupCount));
  };

  const prevPlatform = () => {
    setCurrentPlatformIndex(prev => ((prev - 1 + groupCount) % groupCount));
  };

  const currentService = services[currentServiceIndex];
  // Clamp index and always render a valid array
  const safeIndex = Math.max(0, Math.min(currentPlatformIndex, groupCount - 1));
  const currentPlatforms = allPlatforms.slice(safeIndex * 4, safeIndex * 4 + 4);

  return (
    <>
      <Head>
        <title>Data Guard</title>
        <meta name="description" content="Leading Implementation Partner for CIAM, IAM & API Security Solutions" />
        <style>{`
          @keyframes marquee-rtl { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .marquee-rtl { display: flex; gap: 2rem; width: 200%; animation: marquee-rtl 30s linear infinite; }
        `}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Custom font links moved to pages/_document.js for global usage */}
      </Head>

      <div className="text-gray-800 pt-20" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        
        {/* Navigation Bar */}
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
                    <span className="text-amber-600 mr-3">📖</span>
                    <div className="font-medium">Training & Enablement</div>
                  </a>
                  <a href="#support" className="dropdown-item-professional">
                    <span className="text-red-600 mr-3">🛠️</span>
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

        {/* Header & Hero Section */}
        <header className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-2xl relative mb-8">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-4">
                  Data Guard
                </h1>
                <p className="text-xl md:text-2xl text-cyan-100 drop-shadow-lg font-semibold mb-6">
                  Leading Implementation Partner for CIAM, IAM, API Security Solutions & Data Governance.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="text-white font-semibold py-3 px-6 rounded-full text-lg hover:underline transition-all">
                    Get Started
                  </a>
                  <a href="#offerings" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg">
                    Our Services
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
                    <Image src="/images/premium_photo-1674506653774-6f51d6ebe799.avif" alt="Cyber Security Solutions" width={320} height={320} className="w-full h-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400/30 rounded-full backdrop-blur-sm animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/30 rounded-full backdrop-blur-sm animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-4 md:p-8">
          {/* Quick Stats removed per request */}

          {/* Our Services Section */}
          <section id="offerings" className="py-6 px-4 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 rounded-2xl shadow-xl mb-10 border border-gray-300/50">
            <div className="container mx-auto px-2">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">Solutions & Implementations</h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-3"></div>
              </div>
              <div className="overflow-x-auto">
                {mounted ? (
                  <div className="overflow-hidden">
                    <div className="marquee-rtl">
                      {[...services, ...services].map((service, idx) => (
                        <div
                          key={`${service.title}-${idx}`}
                          className="group relative bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl border border-gray-300/60 p-8 transform transition-all duration-500 hover:scale-[1.01] cursor-pointer overflow-hidden flex flex-col items-start"
                          style={{ flex: '0 0 320px', maxWidth: '320px', minWidth: '320px' }}
                        >
                          <div className="flex items-center w-full mb-4">
                            <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${service.iconGradient} text-white shadow-lg transition-all duration-300 mr-3`}>
                              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: service.iconSvg }} />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-700 tracking-tight mb-0 uppercase drop-shadow-sm text-left">{service.title}</h3>
                          </div>
                          <p className="text-gray-700 text-lg text-left leading-relaxed mb-0">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                    <div className="h-40 rounded-xl bg-white/80 animate-pulse" />
                    <div className="h-40 rounded-xl bg-white/80 animate-pulse" />
                    <div className="h-40 rounded-xl bg-white/80 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Technology Partners Section */}
          <section id="platforms" className="py-6 px-4 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 rounded-2xl shadow-xl mb-10 border border-gray-300/50">
            <div className="container mx-auto px-2">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">Technology Partners</h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-3"></div>
                <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">We partner with leading technology providers to deliver best-in-class solutions.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                <div className="col-span-full max-w-6xl mx-auto">
                  <div className="group relative bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl hover:shadow-2xl border border-gray-300/60 p-4 transform transition-all duration-500 hover:scale-[1.01] cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-indigo-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <button onClick={(e) => { e.stopPropagation(); prevPlatform(); }} className="absolute left-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); nextPlatform(); }} className="absolute right-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="relative z-10 px-8">
                      {mounted ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          {currentPlatforms.map((platform) => (
                            <div key={platform.name} className="bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50/50 hover:to-cyan-50/50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all p-4 h-36 w-full">
                              <div className="flex items-center justify-center flex-col text-center h-full">
                                <div className="h-20 w-full flex items-center justify-center mb-3">
                                  <div className="h-16 w-40 flex items-center justify-center">
                                    <Image src={platform.logo} alt={platform.name} width={160} height={64} className="h-16 w-40 object-contain hover:scale-105 transition-transform" />
                                  </div>
                                </div>
                                <div className="text-center h-8 flex items-center justify-center">
                                  <h4 className="text-sm font-semibold text-gray-800 leading-tight">{platform.name}</h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          <div className="h-36 rounded-lg bg-white/80 animate-pulse" />
                          <div className="h-36 rounded-lg bg-white/80 animate-pulse" />
                          <div className="h-36 rounded-lg bg-white/80 animate-pulse" />
                          <div className="h-36 rounded-lg bg-white/80 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-12 border border-blue-200/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 6v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Free Security Review</h3>
                  <p className="text-blue-200 text-sm">Comprehensive analysis of your current identity infrastructure</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Recommendations</h3>
                  <p className="text-blue-200 text-sm">Actionable insights to improve security and efficiency</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
                  <p className="text-blue-200 text-sm">Complete assessment with no strings attached</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/15 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.893 5.421a2 2 0 002.214 0L21 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                  </svg>
                  <a href="mailto:contact@dgraud.net" className="text-blue-100 hover:text-cyan-200 transition-colors font-medium">contact@dgraud.net</a>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/15 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg> 
                  <span className="text-blue-100 font-medium">+966-565052220 / +966-541045831</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white text-center p-4 mt-8">
          <p>&copy; 2024 Data Guard. All rights reserved.</p>
          {/* Lint fix: Escaped single quote below */}
          <p>We value our client&#39;s trust and privacy.</p>
        </footer>
      </div>
    </>
  );
}