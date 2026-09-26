import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, MapPin, Building2, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vican Code Private Limited",
  description: "Official Privacy Policy of Vican Code Private Limited (CIN: U62012PB2026PTC069843) under the Indian Digital Personal Data Protection (DPDP) Act 2023 and Information Technology Act 2000.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <ShieldCheck size={14} color="#34d399" />
              <span>DPDP Act 2023 & IT Act 2000 Compliant</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            Effective Date: January 1, 2026 · Last Updated: September 2026
          </p>
        </div>

        {/* Corporate Notice */}
        <div className="glass-card" style={{ padding: "28px", marginBottom: "40px", borderColor: "rgba(99, 102, 241, 0.3)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <Building2 size={24} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                Vican Code Private Limited (Data Fiduciary)
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "8px" }}>
                This Privacy Policy is issued by <strong>Vican Code Private Limited</strong>, an incorporated company under the Ministry of Corporate Affairs, Government of India, having Corporate Identification Number (CIN) <strong>U62012PB2026PTC069843</strong> and registered office at <strong>#211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</strong>.
              </p>
              <div style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: 600 }}>
                Applies to: vicancode.com, dgate.in, educan.io, vicantools.com, vicanthemes.com, praceasy.in, mybankifsccode.com
              </div>
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div style={{
          background: "rgba(16, 22, 38, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "40px",
          color: "#cbd5e1",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: "32px"
        }}>
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              1. Statutory Framework & Scope
            </h2>
            <p>
              This Privacy Policy explains how Vican Code Private Limited collects, uses, processes, stores, and protects personal data when you interact with our websites, APIs, enterprise SaaS platforms, and digital applications. We strictly comply with:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>The Indian Digital Personal Data Protection (DPDP) Act, 2023</li>
              <li>The Information Technology Act, 2000 and IT (Reasonable Security Practices and Procedures) Rules, 2011</li>
              <li>The General Data Protection Regulation (GDPR) for global visitors</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              2. Product-Specific Data Processing
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "10px" }}>
                <strong style={{ color: "#34d399" }}>DGate (dgate.in):</strong> Visitor entry records, resident flat numbers, vehicle registration numbers, and gate pass logs are processed strictly on behalf of the respective Resident Welfare Association (RWA) acting as the Data Controller.
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "10px" }}>
                <strong style={{ color: "#818cf8" }}>Educan (educan.io):</strong> Student and guardian personal identifiers, attendance logs, and academic records are processed in strict confidence under institutional contracts.
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "10px" }}>
                <strong style={{ color: "#38bdf8" }}>VicanTools (vicantools.com):</strong> Operates via 100% client-side WebAssembly. No files, documents, images, or input text are ever uploaded, transmitted, or logged to our servers.
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "10px" }}>
                <strong style={{ color: "#ec4899" }}>PracEasy (praceasy.in):</strong> Client accounting documents and statutory filing records are encrypted at rest with AES-256 and accessible only to authenticated firm personnel.
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              3. Payment & Billing Security
            </h2>
            <p>
              Subscription and transaction processing for our platforms (such as DGate society dues and SaaS subscriptions) are routed through PCI-DSS Level 1 certified gateways including Razorpay. Vican Code Private Limited does not store credit/debit card numbers or CVVs on its infrastructure.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              4. Data Principal Rights (Under DPDP Act 2023)
            </h2>
            <p>
              As a Data Principal under Indian law, you have the right to:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Access a summary of your personal data being processed</li>
              <li>Seek correction, completion, or updating of misleading or inaccurate data</li>
              <li>Request erasure of personal data that is no longer necessary for the stated purpose</li>
              <li>Nominate an individual to exercise data rights in the event of incapacity</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              5. Grievance Officer & Contact
            </h2>
            <p>
              In accordance with the Information Technology Act, 2000 and DPDP Act, 2023, queries or grievances regarding data privacy should be addressed to our Data Grievance Redressal Officer:
            </p>
            <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "20px", borderRadius: "10px", marginTop: "12px" }}>
              <div><strong>Grievance Officer:</strong> Legal & Compliance Cell</div>
              <div><strong>Company:</strong> Vican Code Private Limited</div>
              <div><strong>Registered Office:</strong> #211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</div>
              <div><strong>Email:</strong> <a href="mailto:vicancodeofficial@gmail.com" style={{ color: "#38bdf8" }}>vicancodeofficial@gmail.com</a></div>
              <div><strong>Phone:</strong> +91 86071 43370 / +91 870 857 2459</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
