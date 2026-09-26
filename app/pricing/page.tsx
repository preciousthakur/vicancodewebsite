import React from "react";
import Link from "next/link";
import { 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Layers, 
  Landmark 
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent SaaS & Engineering Pricing | Vican Code Private Limited",
  description: "Review transparent pricing models for Vican Code Private Limited flagship SaaS platforms (DGate, Educan, PracEasy, VicanTools, VicanThemes, MyBankIFSCCode) and custom software development.",
};

export default function PricingPage() {
  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <Sparkles size={14} />
              <span>Transparent & Direct SaaS Pricing</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "18px" }}>
            Fair, Transparent & Scalable Pricing
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "780px", margin: "0 auto", lineHeight: 1.6 }}>
            Clear SaaS subscriptions for our flagship platforms, with zero hidden charges. All payments are securely processed with GST invoices issued by <strong style={{ color: "#ffffff" }}>Vican Code Private Limited</strong>.
          </p>
        </div>

        {/* Section 1: DGate Pricing */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Building2 size={20} color="#10b981" />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff" }}>DGate — Smart Society Management OS</h2>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>Gate security & automated maintenance billing for gated residential communities.</p>
            </div>
          </div>

          <div className="grid-2">
            <div className="glass-card" style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>DGate Starter Gate Pass</span>
                  <span className="badge-pill" style={{ borderColor: "rgba(16, 185, 129, 0.4)", color: "#34d399", background: "rgba(16, 185, 129, 0.1)" }}>Gated Societies</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff" }}>₹20</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.95rem" }}>/ flat / month (Billed Annually)</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  Essential digital security and visitor approval system for societies looking to modernize gate pass operations.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Digital QR-code visitor entry passes</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Resident mobile push notification approvals</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Security guard tablet / mobile app interface</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Delivery & cab pre-approvals</span>
                  </li>
                </ul>
              </div>
              <a href="https://dgate.in" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                <span>Get Started on dgate.in</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="glass-card" style={{ padding: "40px", borderColor: "rgba(16, 185, 129, 0.4)", background: "linear-gradient(135deg, rgba(16, 22, 38, 0.9) 0%, rgba(16, 185, 129, 0.08) 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>DGate Enterprise + Razorpay ERP</span>
                  <span className="badge-live">Most Popular</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "2.75rem", fontWeight: 800, color: "#34d399" }}>₹30</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.95rem" }}>/ flat / month (Billed Annually)</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  Complete society OS: Gate security, automatic maintenance billing via Razorpay, payment reconciliation, and amenity booking.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span><strong>Everything in Starter Plan</strong></span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Automated Razorpay maintenance billing & receipts</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Digital WhatsApp payment reminders to defaulters</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Clubhouse & amenity online booking portal</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                    <Check size={16} color="#34d399" /> <span>Dedicated Account Manager & 24/7 Priority Support</span>
                  </li>
                </ul>
              </div>
              <a href="https://dgate.in" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
                <span>Deploy DGate Enterprise</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: PracEasy & Educan */}
        <div style={{ marginBottom: "80px" }}>
          <div className="grid-2">
            {/* PracEasy */}
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="badge-pill" style={{ borderColor: "rgba(236, 72, 153, 0.4)", color: "#f472b6", background: "rgba(236, 72, 153, 0.1)" }}>
                  PracEasy · CA Compliance SaaS
                </span>
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
                PracEasy for Indian CA Firms
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Statutory compliance automation, client document vault, and staff task management built for Indian tax & accounting professionals.
              </p>
              <div style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontWeight: 700, color: "#ffffff" }}>Professional Firm Tier</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ec4899" }}>₹399 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ month</span></span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, color: "#ffffff" }}>Multi-Partner Enterprise</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ec4899" }}>₹599 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ month</span></span>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#cbd5e1" }}>
                  <Check size={16} color="#ec4899" /> <span>GST, Income Tax, TDS, and ROC statutory calendars</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#cbd5e1" }}>
                  <Check size={16} color="#ec4899" /> <span>Client self-service document portal with audit trail</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#ec4899" }}>
                  <Check size={16} color="#ec4899" /> <span>Staff timesheets & billable hours breakdown</span>
                </li>
              </ul>
              <a href="https://praceasy.in" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                <span>Explore PracEasy Plans</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Educan */}
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="badge-pill" style={{ borderColor: "rgba(99, 102, 241, 0.4)", color: "#818cf8", background: "rgba(99, 102, 241, 0.1)" }}>
                  Educan · Cloud School ERP
                </span>
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
                Educan School & College ERP
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Modern cloud administrative engine for K-12 schools, coaching institutes, and higher education chains across India.
              </p>
              <div style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontWeight: 700, color: "#ffffff" }}>Core School Tier</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#818cf8" }}>₹15 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ student / mo</span></span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, color: "#ffffff" }}>Complete Campus Suite</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#818cf8" }}>₹25 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ student / mo</span></span>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#cbd5e1" }}>
                  <Check size={16} color="#818cf8" /> <span>Biometric attendance & parent SMS alerts</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#818cf8" }}>
                  <Check size={16} color="#818cf8" /> <span>Online fee collection with instant receipt generation</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#818cf8" }}>
                  <Check size={16} color="#818cf8" /> <span>Automated CBSE & ICSE exam report card generator</span>
                </li>
              </ul>
              <a href="https://educan.io" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                <span>Request Educan Demo</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Free Utilities & Marketplaces */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "28px", textAlign: "center" }}>
            Developer Marketplaces & Free Public Utilities
          </h2>

          <div className="grid-3">
            {/* VicanTools */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "inline-flex", padding: "4px 8px", borderRadius: "6px", background: "rgba(6, 182, 212, 0.15)", color: "#38bdf8", fontSize: "0.75rem", fontWeight: 700, marginBottom: "12px" }}>
                  VicanTools
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                  100% Free Forever
                </h3>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#38bdf8", marginBottom: "12px" }}>
                  ₹0 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ No Account Needed</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  WebAssembly client-side PDF manipulation, image compressor, JSON formatters, and developer utilities with 0 server uploads.
                </p>
              </div>
              <a href="https://vicantools.com" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <span>Launch vicantools.com</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* MyBankIFSCCode */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "inline-flex", padding: "4px 8px", borderRadius: "6px", background: "rgba(139, 92, 246, 0.15)", color: "#a78bfa", fontSize: "0.75rem", fontWeight: 700, marginBottom: "12px" }}>
                  MyBankIFSCCode
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                  Free Public Utility
                </h3>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#a78bfa", marginBottom: "12px" }}>
                  ₹0 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ Open Access</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Search 160,000+ Indian bank branch IFSC, MICR, and SWIFT codes, and access 12+ precision loan & SIP calculators freely.
                </p>
              </div>
              <a href="https://mybankifsccode.com" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <span>Open mybankifsccode.com</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* VicanThemes */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "inline-flex", padding: "4px 8px", borderRadius: "6px", background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", fontSize: "0.75rem", fontWeight: 700, marginBottom: "12px" }}>
                  VicanThemes
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                  Theme Licenses
                </h3>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fbbf24", marginBottom: "12px" }}>
                  $29 - $49 <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>/ Lifetime</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Commercial Next.js, React, Tailwind CSS templates with complete Figma source design files and continuous developer updates.
                </p>
              </div>
              <a href="https://vicanthemes.com" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <span>Browse vicanthemes.com</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Billing Guarantee */}
        <div className="glass-card" style={{ padding: "32px", textAlign: "center", borderColor: "rgba(99, 102, 241, 0.3)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#34d399", fontWeight: 700, fontSize: "0.9rem", marginBottom: "8px" }}>
            <ShieldCheck size={18} />
            <span>Official Billing Guarantee · Vican Code Private Limited</span>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", maxWidth: "700px", margin: "0 auto" }}>
            All enterprise SaaS subscriptions and consulting contracts are executed under Indian legal jurisdiction (Derabassi, Punjab). We provide full GST tax invoices, data processing agreements (DPA), and standard enterprise SLAs.
          </p>
        </div>
      </div>
    </div>
  );
}
