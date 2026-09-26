import React from "react";
import Link from "next/link";
import { FileText, Building2, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vican Code Private Limited",
  description: "Terms of Service and Enterprise SaaS Agreement for Vican Code Private Limited (CIN: U62012PB2026PTC069843), Derabassi, Punjab, India.",
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <Scale size={14} color="#818cf8" />
              <span>Enterprise Legal Terms</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
            Terms of Service
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            Effective Date: January 1, 2026 · Governing Law: Republic of India
          </p>
        </div>

        {/* Corporate Header */}
        <div className="glass-card" style={{ padding: "28px", marginBottom: "40px", borderColor: "rgba(99, 102, 241, 0.3)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <Building2 size={24} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                Vican Code Private Limited
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.6 }}>
                These Terms of Service constitute a legally binding agreement between you (individual or corporate entity) and <strong>Vican Code Private Limited</strong> (CIN: <strong>U62012PB2026PTC069843</strong>), with registered office at #211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Body */}
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
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              1. Acceptance & Scope of Agreement
            </h2>
            <p>
              By accessing, browsing, registering for an account, or subscribing to any software, application, or service offered by Vican Code Private Limited—including but not limited to <strong>DGate</strong> (dgate.in), <strong>Educan</strong> (educan.io), <strong>VicanTools</strong> (vicantools.com), <strong>VicanThemes</strong> (vicanthemes.com), <strong>PracEasy</strong> (praceasy.in), and <strong>MyBankIFSCCode</strong> (mybankifsccode.com)—you agree to be bound by these Terms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              2. SaaS Subscription & Service Level Agreements (SLAs)
            </h2>
            <p>
              For commercial enterprise subscriptions (such as DGate society management and Educan school ERP), Vican Code Private Limited commits to delivering 99.9% uptime for cloud infrastructure, excluding planned maintenance windows. Subscriptions are billed per agreed schedules (monthly or annually) with GST invoices provided.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              3. Client Data Ownership & Confidentiality
            </h2>
            <p>
              All customer data, including resident rosters, student records, client tax documents, and financial data inputted into our cloud systems remain the exclusive property of the customer. Vican Code Private Limited acts strictly as a data processor and fiduciary under the DPDP Act 2023.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              4. WebAssembly & Free Tools License
            </h2>
            <p>
              VicanTools (vicantools.com) and MyBankIFSCCode (mybankifsccode.com) are provided free of charge for public benefit on an "as is" and "as available" basis without any warranty. Because VicanTools processes data client-side via WebAssembly, Vican Code Private Limited does not possess, log, or store your documents.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms and any dispute arising out of or related to our products and services shall be governed by and construed in accordance with the laws of the Republic of India. The courts situated in <strong>Derabassi / SAS Nagar Mohali / Punjab</strong> shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              6. Corporate Legal Inquiries
            </h2>
            <p>
              For legal notices, enterprise contract negotiations, or compliance matters:
            </p>
            <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "20px", borderRadius: "10px", marginTop: "12px" }}>
              <div><strong>Vican Code Private Limited</strong></div>
              <div>CIN: U62012PB2026PTC069843 · PAN: AAMCV7348B</div>
              <div>Address: #211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</div>
              <div>Email: <a href="mailto:vicancodeofficial@gmail.com" style={{ color: "#38bdf8" }}>vicancodeofficial@gmail.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
