import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Cpu, 
  Database, 
  Globe2, 
  Layers, 
  Code2, 
  Server, 
  Smartphone, 
  ExternalLink,
  Lock,
  Zap,
  Users,
  Award
} from "lucide-react";

export default function HomePage() {
  const products = [
    {
      title: "DGate",
      category: "Smart Society OS",
      badge: "Enterprise SaaS",
      badgeColor: "#10b981",
      description: "Advanced gate security, digital visitor passes, resident mobile approvals, and automated society maintenance collection powered by Razorpay.",
      features: [
        "Visitor & vendor QR-based gate check-in system",
        "Instant resident push notification approvals on iOS & Android",
        "Society maintenance billing with auto-reconciled Razorpay integration",
        "Digital complaints desk, clubhouse booking, and guard patrol tracking"
      ],
      pricingPreview: "Plans start at ₹20 - ₹30 / flat / month",
      url: "https://dgate.in",
      icon: <Building2 size={26} color="#10b981" />
    },
    {
      title: "Educan",
      category: "Cloud School ERP",
      badge: "EdTech Solution",
      badgeColor: "#6366f1",
      description: "Comprehensive multi-branch school administration software managing end-to-end student lifecycles, real-time fee tracking, and parent communication.",
      features: [
        "Student admissions, biometric attendance, and staff management",
        "Automated fee collection, penalty calculators, and digital receipts",
        "CBSE/ICSE compliant automated examination report cards",
        "Dedicated mobile portal for parents, teachers, and school management"
      ],
      pricingPreview: "Tiered institutional plans with zero hardware setup",
      url: "https://educan.io",
      icon: <GraduationCapIcon />
    },
    {
      title: "VicanTools",
      category: "WebAssembly Utility Suite",
      badge: "100% Free & Private",
      badgeColor: "#06b6d4",
      description: "High-performance browser-native utility engine. Perform heavy PDF conversions, image compressions, and developer tasks locally with zero server uploads.",
      features: [
        "100% client-side WebAssembly execution (Zero data uploaded to cloud)",
        "PDF merge, split, compress, watermark, and PDF-to-image converter",
        "Lossless WebP/PNG/JPEG optimizer and SVG sanitizer",
        "JSON formatting, Base64 encoder/decoder, and regex debugger"
      ],
      pricingPreview: "Free forever · No sign-up required · Unlimited usage",
      url: "https://vicantools.com",
      icon: <Cpu size={26} color="#06b6d4" />
    },
    {
      title: "VicanThemes",
      category: "Digital Theme Marketplace",
      badge: "Developer Hub",
      badgeColor: "#f59e0b",
      description: "Handcrafted UI kits, Next.js templates, Tailwind components, and responsive HTML5 web designs curated for modern engineering teams.",
      features: [
        "Production-grade Next.js, React, Tailwind CSS & Vue 3 source code",
        "Comprehensive Figma & Adobe XD design files included",
        "Fully responsive layouts rigorously tested on 50+ devices",
        "Commercial licensing with continuous updates & premium developer support"
      ],
      pricingPreview: "Individual theme licenses & All-Access Developer Passes",
      url: "https://vicanthemes.com",
      icon: <Layers size={26} color="#f59e0b" />
    },
    {
      title: "PracEasy",
      category: "CA Practice Management",
      badge: "FinTech Compliance",
      badgeColor: "#ec4899",
      description: "Statutory workflow and practice management system built specifically for Indian Chartered Accountants, tax consultants, and corporate secretaries.",
      features: [
        "Integrated GST, Income Tax (ITR), TDS, and ROC statutory calendars",
        "Secure client document vault with time-stamped digital receipts",
        "Team task delegation, staff timesheets, and billable hour tracking",
        "Dual-portal architecture: Firm Management & Client Self-Service"
      ],
      pricingPreview: "Professional Firm (₹399/mo) · Multi-Partner (₹599/mo)",
      url: "https://praceasy.in",
      icon: <BriefcaseIcon />
    },
    {
      title: "MyBankIFSCCode",
      category: "Banking Directory Suite",
      badge: "Public Utility",
      badgeColor: "#8b5cf6",
      description: "Definitive directory of 160,000+ Indian bank branches with real-time IFSC, MICR, SWIFT lookups, and 12+ precision banking calculators.",
      features: [
        "Instant IFSC & MICR validation across all scheduled commercial banks",
        "Real-time branch address, contact details, and clearing zone codes",
        "12+ precision calculators: Reducing Balance EMI, SIP Returns, FD, PPF",
        "Public financial reference platform built for maximum speed"
      ],
      pricingPreview: "100% Free Public Utility · Updated regularly",
      url: "https://mybankifsccode.com",
      icon: <LandmarkIcon />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          {/* Top Pill */}
          <div style={{ marginBottom: "24px" }}>
            <span className="badge-pill">
              <span className="pulse-dot" />
              <span>Registered Corporate Entity · CIN: U62012PB2026PTC069843</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "1000px",
            margin: "0 auto 24px auto"
          }}>
            Engineering Modern Digital Infrastructure & <span className="text-gradient-primary">Flagship SaaS Ecosystems</span>
          </h1>

          <p style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            color: "#94a3b8",
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            lineHeight: 1.6
          }}>
            <strong style={{ color: "#f8fafc" }}>Vican Code Private Limited</strong> builds and operates mission-critical cloud software—from gated community security to school ERPs, browser WebAssembly utilities, and compliance platforms.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "60px"
          }}>
            <a href="#products-section" className="btn-primary">
              <Sparkles size={16} />
              <span>Explore 6 Flagship Products</span>
            </a>
            <Link href="/pricing" className="btn-secondary">
              <span>View Transparent Pricing</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Verification Bar */}
          <div style={{
            background: "rgba(16, 22, 38, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "20px 28px",
            maxWidth: "960px",
            margin: "0 auto",
            backdropFilter: "blur(12px)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px"
          }} className="stats-bar">
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff" }}>6</div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Flagship SaaS Platforms</div>
            </div>
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#34d399" }}>160K+</div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Bank Branches Indexed</div>
            </div>
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#38bdf8" }}>100%</div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Client-Side Wasm Privacy</div>
            </div>
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#818cf8" }}>MCA</div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Govt. of India Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Products Section */}
      <section id="products-section" style={{
        paddingTop: "80px",
        paddingBottom: "100px",
        background: "rgba(13, 18, 31, 0.4)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#818cf8",
              display: "block",
              marginBottom: "12px"
            }}>
              Active Software Portfolio
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "16px" }}>
              Our 6 Flagship Products
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#94a3b8", maxWidth: "680px", margin: "0 auto" }}>
              Engineered, maintained, and operated in-house by Vican Code Private Limited for businesses, communities, and developers.
            </p>
          </div>

          {/* 6 Products Grid */}
          <div className="grid-3">
            {products.map((p) => (
              <ProductCard
                key={p.title}
                title={p.title}
                category={p.category}
                badge={p.badge}
                badgeColor={p.badgeColor}
                description={p.description}
                features={p.features}
                pricingPreview={p.pricingPreview}
                url={p.url}
                icon={p.icon}
              />
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/products" className="btn-secondary" style={{ display: "inline-flex" }}>
              <span>Compare Full Technical Architecture & Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Legal & Compliance Section */}
      <section style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: "48px",
            background: "linear-gradient(135deg, rgba(16, 22, 38, 0.9) 0%, rgba(30, 27, 75, 0.4) 100%)",
            borderColor: "rgba(99, 102, 241, 0.3)"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "center" }} className="corp-grid">
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.12)", color: "#34d399", padding: "6px 12px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "16px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                  <ShieldCheck size={16} /> CORPORATE VERIFICATION
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  Legally Registered & Ministry-Certified Indian Tech Enterprise
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "24px" }}>
                  Vican Code Private Limited is legally incorporated with the Ministry of Corporate Affairs (Govt. of India), operating under strict corporate governance, data privacy compliance, and transparent business models.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                    <CheckCircle2 size={18} color="#34d399" />
                    <span><strong>Company Name:</strong> Vican Code Private Limited</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                    <CheckCircle2 size={18} color="#34d399" />
                    <span><strong>CIN:</strong> <span className="text-mono" style={{ color: "#38bdf8" }}>U62012PB2026PTC069843</span></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                    <CheckCircle2 size={18} color="#34d399" />
                    <span><strong>PAN:</strong> <span className="text-mono" style={{ color: "#cbd5e1" }}>AAMCV7348B</span></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#cbd5e1" }}>
                    <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: "3px" }} />
                    <span><strong>Headquarters:</strong> #211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</span>
                  </div>
                </div>
              </div>

              {/* Compliance Badges Card */}
              <div style={{
                background: "rgba(7, 9, 14, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <Lock size={24} color="#818cf8" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>
                      Digital Personal Data Protection (DPDP) Act 2023
                    </h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      Fully aligned with India's latest DPDP Act and IT Act 2000 data principal rights, consent frameworks, and encryption standards.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <ShieldCheck size={24} color="#34d399" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>
                      Statutory Banking & Payment Security
                    </h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      PCI-DSS Level 1 compliant gateway processing via Razorpay with encrypted tokenization and zero card data storage on our servers.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <Globe2 size={24} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>
                      Client-Side Zero Data Leakage
                    </h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>
                      Our utility suite VicanTools runs 100% inside your browser via WebAssembly sandbox—guaranteeing 0 bytes sent over the network.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <Link href="/privacy-policy" className="btn-secondary btn-sm" style={{ flex: 1, textAlign: "center" }}>
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="btn-secondary btn-sm" style={{ flex: 1, textAlign: "center" }}>
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section style={{
        paddingTop: "80px",
        paddingBottom: "90px",
        background: "rgba(13, 18, 31, 0.4)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#38bdf8", display: "block", marginBottom: "12px" }}>
              Technical Capabilities
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Custom Engineering & Cloud Architecture
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#94a3b8", maxWidth: "680px", margin: "0 auto" }}>
              In addition to our flagship SaaS products, we design, build, and deploy mission-critical custom applications for select enterprise partners.
            </p>
          </div>

          <div className="grid-3">
            <div className="glass-card" style={{ padding: "32px" }}>
              <Code2 size={32} color="#6366f1" style={{ marginBottom: "18px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Full-Stack Web Engineering
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "16px" }}>
                High-performance web applications built on Next.js, React, Node.js, and TypeScript with server-side rendering and edge caching.
              </p>
              <div style={{ fontSize: "0.8rem", color: "#818cf8", fontWeight: 600 }}>Next.js · React · Node.js · REST / GraphQL</div>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <Smartphone size={32} color="#06b6d4" style={{ marginBottom: "18px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Mobile App Development
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "16px" }}>
                Cross-platform iOS and Android mobile solutions with native fluid performance, biometric authentication, and offline sync.
              </p>
              <div style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: 600 }}>Flutter · React Native · Swift · Kotlin</div>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <Server size={32} color="#10b981" style={{ marginBottom: "18px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Cloud Architecture & DevOps
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "16px" }}>
                Multi-region AWS cloud infrastructure, automated CI/CD pipelines, container orchestration, and real-time observability.
              </p>
              <div style={{ fontSize: "0.8rem", color: "#34d399", fontWeight: 600 }}>AWS · Docker · Kubernetes · PostgreSQL</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: "90px", paddingBottom: "110px", textAlign: "center" }}>
        <div className="container-narrow">
          <div className="glass-card" style={{
            padding: "56px 40px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)",
            borderColor: "rgba(99, 102, 241, 0.4)"
          }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
              Ready to Upgrade Your Software Infrastructure?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "32px", lineHeight: 1.6 }}>
              Whether you need to deploy DGate for your society, modernize your school with Educan, or build custom enterprise software, our team in Derabassi is ready.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                <span>Contact Our Engineering Team</span>
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+918607143370" className="btn-secondary">
                <span>Call +91 86071 43370</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

// Icon helper components
function GraduationCapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function LandmarkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="22" y2="22"/>
      <line x1="6" x2="6" y1="18"/>
      <line x1="10" x2="10" y1="18"/>
      <line x1="14" x2="14" y1="18"/>
      <line x1="18" x2="18" y1="18"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  );
}
