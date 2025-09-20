import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/layout/Navigation'
export default function DataGovernance() {
  return (
    <>
      <Head>
  <title>DataMind — Data Governance & Security Solutions</title>
        <meta name="description" content="Complete Data Governance and Security Solutions tailored for Saudi PDPL and NCA requirements." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation />
        <header className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white py-12 shadow-lg">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Complete Data Governance and Security Solutions</h1>
                <p className="mt-3 text-cyan-100 text-base md:text-lg lg:text-xl max-w-3xl">Explore DataMind&apos;s integrated modules, purpose-built specifically for Saudi compliance and the unique needs of organizations in the Kingdom.</p>
              </div>
              <div className="hidden md:block md:flex-shrink-0 md:ml-8">
                <div className="relative w-80 h-44 md:w-[440px] md:h-[280px] lg:w-[520px] lg:h-[320px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 border border-white/30 bg-white/50">
                  <Image src="/images/dataMindHero.png" alt="DataMind Hero" fill className="object-cover" priority />
                </div>
              </div>
              {/* removed Back to Home button per request */}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section id="unified-dictionary" className="mb-12">
            <div className="flex flex-col md:flex-row items-stretch gap-6">
              {/* Image on left for md+; stack on mobile */}
              <div className="w-full md:w-80 flex-shrink-0 md:mr-4 order-1 md:order-none relative z-0">
                {/* Modern gradient frame: outer gradient + padded inner white container with thicker border */}
                <div className="rounded-lg p-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-sm h-64 md:h-full">
                  <div className="relative h-64 md:h-full rounded-md overflow-hidden bg-white border-2 border-gray-100 dark:border-gray-800">
                    <Image
                      src="/images/Unified Data Dictionary.png"
                      alt="Unified Data Dictionary"
                      fill
                      sizes="(max-width: 768px) 260px, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex-1 md:pl-6 order-2 md:order-none relative z-10">
                <h2 className="text-2xl font-bold mb-3 pl-3 border-l-4 border-cyan-600 text-gray-900">Unified Data Dictionary</h2>
                <p className="text-gray-700 mb-4 text-left">Our centralized repository forms the foundation of every module with bilingual (Arabic/English) support for all file-types, document-types and information-types. Essential foundation for consistent data governance.</p>
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li>✓ Accepts patterns (regex), keyword lists, manual entries</li>
                    <li>✓ AI-suggested terms that learn over time</li>
                    <li>✓ Multi-format support: text, images, PDF/XPS, Office, CAD</li>
                    <li>✓ Feeds all modules for policy-driven consistency</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="data-discovery" className="mb-12">
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-6">
              <div className="w-full md:w-80 flex-shrink-0 md:ml-4 relative z-0">
                {/* Gradient frame matching Unified Data Dictionary */}
                <div className="rounded-lg p-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-sm h-64 md:h-full">
                  <div className="relative h-64 md:h-full rounded-md overflow-hidden bg-white border-2 border-gray-100 dark:border-gray-800">
                    <Image
                      src="/images/DataDiscovery.png"
                      alt="Data Discovery"
                      fill
                      sizes="(max-width: 768px) 260px, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex-1 md:pr-6 relative z-10">
                <h2 className="text-2xl font-bold mb-3">Data Discovery System</h2>
                <p className="text-gray-700 mb-4">Our dual-mode engines combine AI-powered contextual analysis with rule-based precision scanning to identify sensitive data across your entire organization. Critically identifies personal data subject to PDPL and critical/sensitive data defined by NCA frameworks; assists in creating a comprehensive data inventory (PDPL Article 14) and mapping data flows.</p>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li>✓ All data states coverage (at rest/in use/in motion)</li>
                    <li>✓ Scans endpoints, Exchange, SharePoint, file-servers</li>
                    <li>✓ Pre-built templates (PII, IP, financial)</li>
                    <li>✓ Scheduled scans & gradual roll-out capability</li>
                    <li>✓ Comprehensive PDPL & NCA-DCC audit reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="document-tracker" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Document Tracker</h2>
            <p className="text-gray-700 mb-4">Maintain complete visibility with a live hierarchical tree of every discovered file in your organization, with comprehensive management capabilities.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Action controls: Revoke, Take Ownership, Delete & Shred</li>
                <li>✓ Auto-rights copy & key generation on new versions</li>
                <li>✓ Real-time forensics & alerts (mass download, off-hours access)</li>
                <li>✓ Endpoint agent keeps tree current even offline</li>
                <li>✓ Ties into central Key Management System</li>
              </ul>
            </div>
          </section>

          <section id="classification" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Data Classification System</h2>
            <p className="text-gray-700 mb-4">Classify and categorize data with automatic and manual labelling driven by AI, meta-rules or user plug-ins for Word, Excel, and Outlook. Implements the NCA ECC-1:2018 classification framework.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Traffic-light scheme aligned to PDPL/NCA tiers out-of-box</li>
                <li>✓ Unlimited custom labels for organization-specific needs</li>
                <li>✓ Visual markers: explorer overlays, headers/footers, watermarks</li>
                <li>✓ Fine-grained policies (who can downgrade, mandatory vs. optional)</li>
                <li>✓ Bilingual classification support (Arabic/English)</li>
              </ul>
            </div>
          </section>

          <section id="rights-management" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Data Rights Management System</h2>
            <p className="text-gray-700 mb-4">Control access to sensitive data with auto-protection on label or manual wrap via plug-ins, featuring granular multi-axis rights management. Handles data subject access requests workflow (including right to erasure - PDPL Article 18) and enforces Zero-trust principles.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Granular rights across four axes: data, protection, time, location</li>
                <li>✓ Pre-built templates (Finance-RO, R&D-Edit)</li>
                <li>✓ Simple exit strategy to bulk-unprotect when needed</li>
                <li>✓ Isolated KMS micro-service; supports external HSM/KV</li>
                <li>✓ Zero-trust enforcement from endpoint to cloud</li>
              </ul>
            </div>
          </section>

          <section id="dlp" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Data Leak Prevention System (DLP)</h2>
            <p className="text-gray-700 mb-4">Prevent unauthorized data sharing with comprehensive protection across endpoints, email, and web, with unified incident management. Blocks actions like copying to USB, uploading to unauthorized cloud services, screen capture, or printing of sensitive/classified data; implements ECC-2:2018 data protection controls.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Endpoint protection: blocks USB, printing, screen capture, clipboard</li>
                <li>✓ Email & Web Guards with real-time scanning</li>
                <li>✓ Policy Matrix with content, classification and protection-based rules</li>
                <li>✓ Dynamic watermarking with user, MAC, timestamp variables</li>
                <li>✓ Unified logging and BI dashboards for 360° visibility</li>
              </ul>
            </div>
          </section>

          <section id="secure-share" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Secure Share System</h2>
            <p className="text-gray-700 mb-4">Enable secure online sharing of sensitive data with AES-256 encryption at upload and comprehensive access controls for partners, auditors, and remote staff. Creates audit trails (PDPL Article 15) and maintains PDPL residency requirements during transfer.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Browser/agent access with optional MFA</li>
                <li>✓ Remote revoke, expiry, and watermark controls</li>
                <li>✓ Ideal for partners, auditors, remote staff</li>
                <li>✓ Maintains PDPL residency & NCA secure-transfer controls</li>
                <li>✓ Detailed sharing analytics and audit trails</li>
              </ul>
            </div>
          </section>

          <section id="air-gap" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">Air-Gap Share System</h2>
            <p className="text-gray-700 mb-4">Specialized offline bulk encryption solution designed for the highest security environments like MoD, Oil & Gas rigs, and isolated labs. Creates physical separation specifically for cross-border transfer compliance needs.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Bulk archive encryption for secure transfers</li>
                <li>✓ Decrypt via offline agent with multi-factor authentication</li>
                <li>✓ USB token + PIN + biometric security options</li>
                <li>✓ One-time key with full offline mode</li>
                <li>✓ Complies with strictest security requirements</li>
              </ul>
            </div>
          </section>

          <section id="dashboards" className="mb-12">
            <h2 className="text-2xl font-bold mb-3">BI & Compliance Dashboards</h2>
            <p className="text-gray-700 mb-4">Gain complete visibility into your data governance posture with comprehensive dashboards that instantly map to PDPL Articles & NCA-DCC controls. Provides automated reporting and serves as a security control implementation evidence repository.</p>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li>✓ Module-specific widgets for discoveries, classification status</li>
                <li>✓ Protected documents and security incident tracking</li>
                <li>✓ Instant mapping to PDPL Articles & NCA-DCC controls</li>
                <li>✓ Exportable reports for auditors and compliance reviews</li>
                <li>✓ Real-time compliance posture at a glance</li>
              </ul>
            </div>
          </section>

        </main>

        <style jsx>{`
          @media (min-width: 768px) {
            .dg-scale {
              transform: scaleX(1.3) scaleY(1.25);
              transform-origin: bottom center;
            }
          }
        `}</style>

        <footer className="bg-white/90 border-t py-6">
          <div className="container mx-auto px-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} DataGuard — All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}
