import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Users, 
  ArrowRight,
  Lock,
  Globe2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Corporate Governance | Vican Code Private Limited",
  description: "Learn about Vican Code Private Limited (CIN: U62012PB2026PTC069843), our corporate governance, registered office in Derabassi, Punjab, and our suite of flagship cloud SaaS platforms.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <Building2 size={14} />
              <span>Corporate Profile & Governance</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "18px" }}>
            About Vican Code Private Limited
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "780px", margin: "0 auto", lineHeight: 1.6 }}>
            An Indian software technology enterprise committed to engineering resilient digital public infrastructure and enterprise-grade SaaS products.
          </p>
        </div>

        {/* Corporate Certificate Card */}
        <div className="glass-card" style={{
          padding: "48px",
          marginBottom: "60px",
          borderColor: "rgba(16, 185, 129, 0.3)",
          background: "linear-gradient(135deg, rgba(16, 22, 38, 0.9) 0%, rgba(16, 185, 129, 0.05) 100%)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <ShieldCheck size={28} color="#34d399" />
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#34d399" }}>
              Ministry of Corporate Affairs (Govt. of India) Verification
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px" }} className="cert-grid">
            <div>
              <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: 1.7, marginBottom: "24px" }}>
                <strong>Vican Code Private Limited</strong> was established with the vision of developing world-class SaaS solutions from India for national and global markets. We operate with zero external technical debt, maintaining full proprietary ownership of our software codebases, data centers, and intellectual property.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                  <CheckCircle2 size={18} color="#34d399" />
                  <span><strong>Corporate Entity:</strong> Vican Code Private Limited</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                  <CheckCircle2 size={18} color="#34d399" />
                  <span><strong>CIN (Govt. of India):</strong> <span className="text-mono" style={{ color: "#38bdf8" }}>U62012PB2026PTC069843</span></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#cbd5e1" }}>
                  <CheckCircle2 size={18} color="#34d399" />
                  <span><strong>PAN:</strong> <span className="text-mono" style={{ color: "#cbd5e1" }}>AAMCV7348B</span></span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#cbd5e1" }}>
                  <MapPin size={18} color="#34d399" style={{ flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Registered Office:</strong> #211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Info Box */}
            <div style={{
              background: "rgba(7, 9, 14, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                  Official Email
                </span>
                <a href="mailto:vicancodeofficial@gmail.com" style={{ color: "#ffffff", fontWeight: 600 }}>
                  vicancodeofficial@gmail.com
                </a>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                  Telephone Numbers
                </span>
                <div style={{ color: "#ffffff", fontWeight: 600 }}>
                  +91 86071 43370 / +91 870 857 2459
                </div>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                  Jurisdiction & Compliance
                </span>
                <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  Registered with Registrar of Companies (ROC), Punjab & Chandigarh. Compliant with DPDP Act 2023 and IT Act 2000.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div style={{ marginBottom: "70px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: "40px" }}>
            Our Core Principles
          </h2>

          <div className="grid-3">
            <div className="glass-card" style={{ padding: "36px" }}>
              <Lock size={32} color="#818cf8" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Uncompromising Privacy
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                From our WebAssembly-powered VicanTools that processes data locally to enterprise data isolation in DGate, user privacy is our first architectural design decision.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "36px" }}>
              <Award size={32} color="#34d399" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Indian Engineering Excellence
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Headquartered in Derabassi, Punjab, we build software products that solve real-world problems for Indian societies, educators, accountants, and citizens.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "36px" }}>
              <Globe2 size={32} color="#38bdf8" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                Open Digital Infrastructure
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                We believe in providing free, ad-light public utilities like MyBankIFSCCode and VicanTools alongside our commercial B2B SaaS offerings.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div style={{ textAlign: "center" }}>
          <Link href="/products" className="btn-primary">
            <span>Explore All 6 Flagship SaaS Platforms</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      
    </div>
  );
}
