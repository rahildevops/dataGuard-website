          {/* Free Security Review Section */}
          <div className="max-w-xl mx-auto mb-10 bg-gradient-to-br from-cyan-50 via-blue-50/40 to-white/90 rounded-xl shadow-xl border border-cyan-200/60 p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 font-sans" style={{ fontFamily: 'Inter, Montserrat, Poppins, Arial, sans-serif' }}>Free Security Review</h2>
            <ul className="list-none w-full text-left space-y-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                <span className="text-gray-800 font-medium">Comprehensive analysis of your current identity infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                <span className="text-gray-800 font-medium">Expert Recommendations: Actionable insights to improve security and efficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                <span className="text-gray-800 font-medium">No Obligation: Complete assessment with no strings attached</span>
              </li>
            </ul>
            <div className="text-center mt-2">
              <div className="text-base text-blue-700 font-semibold">info@afiyan.com</div>
              <div className="text-base text-gray-700 font-medium">+91-9910339578 / +966-541045831</div>
            </div>
          </div>

import Head from 'next/head';
import Navigation from '../components/layout/Navigation';
import Image from 'next/image';
import { useState, useEffect, useMemo, useRef } from 'react';

export default function CustomSDK() {
  // Carousel data for benefit cards
  // ...removed carousel logic and state...

  return (
    <>
      <Head>
        <title>Custom SDKs</title>
        <meta name="description" content="Custom SDKs for Modern CIAM Solutions - React Native & Flutter SDKs, expert developer support, and seamless integration for your apps." />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 rounded-2xl shadow-xl p-8 border border-gray-300/50 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-center mb-6 uppercase tracking-tight drop-shadow-lg">Accelerate Your CIAM Integration</h1>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            A robust CIAM solution is the foundation of secure user management. However, integrating it into cross-platform apps can still be a challenge. We provide best-in-class SDKs specifically for React Native and Flutter, designed to seamlessly complement existing CIAM solutions like <span className="font-semibold text-cyan-600">Ping</span> and <span className="font-semibold text-cyan-600">ForgeRock</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Lower Development Costs */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl border border-gray-300/60 p-8 flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-blue-700 mb-4 font-sans" style={{ fontFamily: 'Inter, Montserrat, Poppins, Arial, sans-serif' }}>Lower Development Costs</h2>
              <ul className="list-none w-full text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Reduce engineering hours and ongoing maintenance with our pre-built, production-ready SDKs for React Native and Flutter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Focus your budget on innovation, not integration.</span>
                </li>
              </ul>
            </div>
            {/* Accelerate App Deployment */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl border border-gray-300/60 p-8 flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-blue-700 mb-4 font-sans" style={{ fontFamily: 'Inter, Montserrat, Poppins, Arial, sans-serif' }}>Accelerate App Deployment</h2>
              <ul className="list-none w-full text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">You’ve invested in a robust CIAM platform; now, get it into your apps faster.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Our pre-built libraries for React Native and Flutter are designed for rapid, seamless integration, enabling you to bring secure, cross-platform experiences to market sooner.</span>
                </li>
              </ul>
            </div>
            {/* Focus on Core Features */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl border border-gray-300/60 p-8 flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-blue-700 mb-4 font-sans" style={{ fontFamily: 'Inter, Montserrat, Poppins, Arial, sans-serif' }}>Focus on Core Features</h2>
              <ul className="list-none w-full text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Empower your team to deliver unique app experiences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">We handle the SDK complexity—your developers build what matters most to your users.</span>
                </li>
              </ul>
            </div>
            {/* Expert Developer Support */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl border border-gray-300/60 p-8 flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-blue-700 mb-4 font-sans" style={{ fontFamily: 'Inter, Montserrat, Poppins, Arial, sans-serif' }}>Expert Developer Support</h2>
              <ul className="list-none w-full text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Direct access to CIAM & SDK experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Personalized integration guidance & troubleshooting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Security, scalability & compliance best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span>
                  <span className="text-gray-800 font-medium">Accelerate go-live & eliminate integration headaches</span>
                </li>
              </ul>
            </div>
          </div>
          {/* moved up above the carousel */}
          {/* Removed Custom SDKs image and duplicate support block for cleaner layout */}
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 mt-8 text-center shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Ready to simplify your app integration?</h3>
            <p className="text-gray-700 mb-4">Contact us to learn how our SDKs and expert team can help you deliver seamless, secure user experiences—faster.</p>
              <a href="#contact" className="inline-block text-blue-600 font-semibold py-3 px-6 rounded-full text-lg hover:underline">Get in Touch</a>
          </div>
        </section>
      </main>
    </>
  );
}
