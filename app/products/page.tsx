import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ExternalLink, 
  Check, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight,
  Zap,
  Lock,
  Sparkles,
  Server,
  Smartphone,
  Globe2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flagship SaaS Products | Vican Code Private Limited",
  description: "Explore the 6 flagship cloud software platforms built and operated by Vican Code Private Limited: DGate Society OS, Educan School ERP, VicanTools, VicanThemes, PracEasy, and MyBankIFSCCode.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "dgate",
      title: "DGate",
      tagline: "Smart Society Operating System & Gate Security Platform",
      url: "https://dgate.in",
      badge: "Enterprise SaaS",
      badgeColor: "#10b981",
      description: "DGate is a next-generation society management platform engineered to automate gate operations, visitor tracking, resident communications, and society maintenance billing. Featuring instant push approvals, digital passcards, and Razorpay-powered online collections with automatic ledger reconciliation.",
      highlights: [
        "Digital Visitor Passes with dynamic QR code authentication at security guard desks",
        "Resident Mobile Push Approvals: Accept or deny delivery, cab, and guest entries instantly",
        "Automated Society Maintenance Billing with instant WhatsApp payment links via Razorpay",
        "Digital Guard Patrol Tracking & Incident Logbook with offline sync capabilities",
        "Resident Amenity Booking (Clubhouse, Swimming Pool, Tennis Court) and Helpdesk Ticketing",
        "Role-Based Access for RWA Committee Members, Facility Managers, Guards, and Residents"
      ],
      techSpecs: "Built on Flutter mobile apps, Next.js admin dashboards, PostgreSQL, and PCI-DSS Level 1 Razorpay APIs.",
      targetAudience: "Residential Gated Communities, Apartment Complexes, RWAs, and Commercial Parks."
    },
    {
      id: "educan",
      title: "Educan",
      tagline: "Comprehensive Multi-Branch Cloud School Management ERP",
      url: "https://educan.io",
      badge: "EdTech Solution",
      badgeColor: "#6366f1",
      description: "Educan transforms traditional school administration into an automated, paperless, and real-time digital ecosystem. From student admissions to biometric attendance, automated fee collection with penalty calculators, and CBSE/ICSE-compliant examination report cards, Educan connects administrators, teachers, and parents in real time.",
      highlights: [
        "End-to-End Student Lifecycle Management: Online registration, enrollment, and digital archives",
        "Biometric & RFID Attendance Integration for real-time parent SMS/App notifications",
        "Dynamic Fee Management: Instalment plans, late-fee calculation, and instant payment receipts",
        "CBSE, ICSE, and State Board Compliant Automated Gradebooks and Report Card Generators",
        "Integrated Parent-Teacher Communication Portal with homework dispatch and exam schedules",
        "Multi-Campus Management for educational trusts and school franchise networks"
      ],
      techSpecs: "High-concurrency cloud architecture with microservices, role-based encryption, and zero hardware maintenance.",
      targetAudience: "K-12 Schools, Colleges, Coaching Academies, and Educational Chains across India."
    },
    {
      id: "vicantools",
      title: "VicanTools",
      tagline: "100% Client-Side WebAssembly Utility Engine for Zero Data Leakage",
      url: "https://vicantools.com",
      badge: "100% Free & Private",
      badgeColor: "#06b6d4",
      description: "VicanTools redefines online utility tools by running complex PDF manipulation, image optimization, and developer conversions directly inside the user's browser sandbox using WebAssembly (Wasm). Your sensitive legal contracts, invoices, and private photos never touch an external server.",
      highlights: [
        "Zero Server Uploads: 100% Client-Side Processing guaranteed for total privacy",
        "Advanced PDF Suite: Merge multiple PDFs, split pages, compress file size, and extract text",
        "High-Fidelity Image Optimizer: Convert and compress WebP, PNG, JPEG, and SVG client-side",
        "Developer Workstation: JSON formatters, Base64 encoder/decoder, Hash generators, Regex tester",
        "Completely Free Forever with no account creation, no watermarks, and no file size paywalls",
        "Instant Offline Mode: PWA architecture enables tool execution even without internet access"
      ],
      techSpecs: "Rust compiled to WebAssembly (Wasm), client-side Worker threads, and HTML5 Canvas processing.",
      targetAudience: "Privacy-conscious professionals, developers, lawyers, accountants, and general internet users."
    },
    {
      id: "vicanthemes",
      title: "VicanThemes",
      tagline: "Curated Marketplace for Modern Developer Templates & Design Systems",
      url: "https://vicanthemes.com",
      badge: "Developer Hub",
      badgeColor: "#f59e0b",
      description: "VicanThemes provides professional software development teams and digital agencies with production-ready, beautifully designed frontend themes, Next.js templates, Tailwind CSS components, and full Figma design tokens to accelerate application time-to-market.",
      highlights: [
        "Clean, semantic source code in Next.js, React, Tailwind CSS, Vue 3, and Bootstrap 5",
        "Comprehensive Figma & Adobe XD design files included with each commercial license",
        "100/100 Lighthouse performance benchmarks, full responsive layouts, and cross-browser testing",
        "Pre-built SaaS dashboards, admin panels, e-commerce storefronts, and marketing landing pages",
        "Commercial and Extended licensing options with perpetual updates and technical support",
        "Detailed developer documentation, component catalogs, and easy configuration guides"
      ],
      techSpecs: "TypeScript, Tailwind CSS v3/v4, accessible ARIA components, and modular code architecture.",
      targetAudience: "Frontend engineers, digital product agencies, indie hackers, and SaaS founders."
    },
    {
      id: "praceasy",
      title: "PracEasy",
      tagline: "Statutory Practice & Compliance SaaS for Indian Chartered Accountants",
      url: "https://praceasy.in",
      badge: "FinTech Compliance",
      badgeColor: "#ec4899",
      description: "PracEasy streamlines workflow management and statutory compliance for Indian Chartered Accountants, Company Secretaries, and tax consultants. Never miss a GST return deadline, track team billable hours, and provide clients with a self-service document portal.",
      highlights: [
        "Automated Compliance Calendar for GST filings, Income Tax Returns (ITR), TDS, and ROC filings",
        "Client Document Vault: Secure cloud storage with client upload requests and audit trails",
        "Staff Task Management: Timesheets, billable hour tracking, and team performance metrics",
        "Dual-Portal Architecture: Firm Management dashboard and Client Self-Service document interface",
        "Automated Invoicing & Fee Reminders: Generate GST invoices and collect professional fees",
        "Multi-Partner Collaboration with fine-grained granular permissions for article assistants"
      ],
      techSpecs: "Bank-grade 256-bit AES encryption, Indian DPDP Act compliant storage, and automated backup schedules.",
      targetAudience: "Chartered Accountants (CAs), CS firms, Tax Advocates, and Financial Advisory Practices."
    },
    {
      id: "mybankifsccode",
      title: "MyBankIFSCCode",
      tagline: "Definitive Banking Directory & Financial Calculation Suite",
      url: "https://mybankifsccode.com",
      badge: "Public Utility",
      badgeColor: "#8b5cf6",
      description: "MyBankIFSCCode is one of India's most comprehensive banking directories, indexing over 160,000+ branches across all scheduled public, private, and regional rural banks. Integrated with precision financial calculators for loan EMIs, SIP wealth projection, and fixed deposits.",
      highlights: [
        "Comprehensive database of 160,000+ bank branches across India with IFSC, MICR, and SWIFT codes",
        "Real-Time Branch Details: Address, contact numbers, clearing zones, and RTGS/NEFT/IMPS support",
        "Precision Banking Calculators: Reducing Balance Home/Car Loan EMI, Compound FD, and SIP",
        "State, District, and City Drill-Down navigation designed for lightning-fast search responses",
        "100% Free Public Utility: No paywalls, no login requirements, and optimized for mobile access",
        "Clean, ad-light interface focused on speed, accuracy, and accessibility for Indian citizens"
      ],
      techSpecs: "Indexed database optimized for sub-50ms query lookups, edge CDN caching, and progressive search.",
      targetAudience: "Consumers, accountants, financial planners, and businesses processing NEFT/RTGS transfers."
    }
  ];

  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <Sparkles size={14} />
              <span>Proprietary Software Systems</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "18px" }}>
            Our 6 Flagship SaaS Platforms
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "780px", margin: "0 auto", lineHeight: 1.6 }}>
            Every product in our portfolio is designed, developed, and maintained in-house by <strong style={{ color: "#ffffff" }}>Vican Code Private Limited</strong> with enterprise-grade security and uncompromising reliability.
          </p>
        </div>

        {/* Detailed Product Showcase Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {products.map((product, index) => (
            <div 
              key={product.id}
              id={product.id}
              className="glass-card" 
              style={{
                padding: "48px",
                borderColor: `rgba(255, 255, 255, 0.12)`,
                background: "linear-gradient(135deg, rgba(16, 22, 38, 0.8) 0%, rgba(13, 18, 31, 0.95) 100%)"
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "flex-start" }} className="product-deep-grid">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      background: `${product.badgeColor}22`,
                      color: product.badgeColor,
                      border: `1px solid ${product.badgeColor}55`
                    }}>
                      <span className="pulse-dot" style={{ backgroundColor: product.badgeColor }} />
                      {product.badge}
                    </div>
                    <span style={{ color: "#64748b", fontSize: "0.85rem" }}>Live Enterprise Product</span>
                  </div>

                  <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {product.title}
                  </h2>
                  <div style={{ fontSize: "1.05rem", color: product.badgeColor, fontWeight: 600, marginBottom: "20px" }}>
                    {product.tagline}
                  </div>

                  <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: 1.7, marginBottom: "28px" }}>
                    {product.description}
                  </p>

                  <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: "16px" }}>
                    Core Architecture & Capabilities:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                    {product.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.925rem", color: "#e2e8f0" }}>
                        <Check size={18} color={product.badgeColor} style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        background: `linear-gradient(135deg, ${product.badgeColor} 0%, #4338ca 100%)`,
                        boxShadow: `0 4px 20px -2px ${product.badgeColor}55`
                      }}
                    >
                      <span>Visit Live {product.title}</span>
                      <ExternalLink size={16} />
                    </a>
                    <Link href="/pricing" className="btn-secondary">
                      <span>View Pricing Models</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Right Specification Box */}
                <div style={{
                  background: "rgba(7, 9, 14, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px"
                }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "6px" }}>
                      Target Domain
                    </span>
                    <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>
                      {product.targetAudience}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "6px" }}>
                      Technical Architecture
                    </span>
                    <div style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {product.techSpecs}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "6px" }}>
                      Official Live URL
                    </span>
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "#38bdf8", fontWeight: 600, fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                    >
                      <span>{product.url.replace("https://", "")}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <div style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingTop: "20px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#34d399", fontSize: "0.8rem", fontWeight: 600 }}>
                      <ShieldCheck size={16} />
                      <span>Maintained by Vican Code Pvt Ltd</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
