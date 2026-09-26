"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink, 
  Heart,
  FileText,
  Lock,
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#05070b",
      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      paddingTop: "80px",
      paddingBottom: "40px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative Glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "2px",
        background: "linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)",
        opacity: 0.8
      }} />

      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "60px"
        }} className="footer-grid">
          {/* Column 1: Corporate Entity */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "1.2rem"
              }}>
                V
              </div>
              <div>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", display: "block" }}>
                  VICAN CODE
                </span>
                <span style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 600 }}>
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "20px" }}>
              A pioneering Indian software engineering company building mission-critical SaaS platforms, cloud ERPs, and client-side web utility architectures.
            </p>

            {/* Corporate Identification Card */}
            <div style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "0.8rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={16} color="#34d399" />
                <span style={{ color: "#34d399", fontWeight: 600 }}>MCA Verified Corporate Entity</span>
              </div>
              <div style={{ color: "#cbd5e1" }}>
                <strong>CIN:</strong> <span className="text-mono" style={{ color: "#38bdf8" }}>U62012PB2026PTC069843</span>
              </div>
              <div style={{ color: "#cbd5e1" }}>
                <strong>PAN:</strong> <span className="text-mono" style={{ color: "#f8fafc" }}>AAMCV7348B</span>
              </div>
              <div style={{ color: "#cbd5e1", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                <MapPin size={14} color="#94a3b8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>#211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship SaaS Products */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Flagship SaaS
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="https://dgate.in" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>DGate</span>
                  <span style={{ fontSize: "0.7rem", color: "#34d399", background: "rgba(16, 185, 129, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>Society OS</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
              <li>
                <a href="https://educan.io" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>Educan</span>
                  <span style={{ fontSize: "0.7rem", color: "#818cf8", background: "rgba(99, 102, 241, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>School ERP</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
              <li>
                <a href="https://vicantools.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>VicanTools</span>
                  <span style={{ fontSize: "0.7rem", color: "#38bdf8", background: "rgba(6, 182, 212, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>Wasm Tools</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
              <li>
                <a href="https://vicanthemes.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>VicanThemes</span>
                  <span style={{ fontSize: "0.7rem", color: "#f59e0b", background: "rgba(245, 158, 11, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>Themes Hub</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
              <li>
                <a href="https://praceasy.in" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>PracEasy</span>
                  <span style={{ fontSize: "0.7rem", color: "#ec4899", background: "rgba(236, 72, 153, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>CA Suite</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
              <li>
                <a href="https://mybankifsccode.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#cbd5e1", fontSize: "0.875rem" }}>
                  <span>MyBankIFSCCode</span>
                  <span style={{ fontSize: "0.7rem", color: "#a855f7", background: "rgba(168, 85, 247, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>Banking Directory</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Services */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <li>
                <Link href="/products" style={{ color: "#cbd5e1" }}>All SaaS Products</Link>
              </li>
              <li>
                <Link href="/pricing" style={{ color: "#cbd5e1" }}>Transparent Pricing</Link>
              </li>
              <li>
                <Link href="/services" style={{ color: "#cbd5e1" }}>Custom Engineering</Link>
              </li>
              <li>
                <Link href="/about" style={{ color: "#cbd5e1" }}>Company & Governance</Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#cbd5e1" }}>Contact & Support</Link>
              </li>
              <li>
                <Link href="/privacy-policy" style={{ color: "#cbd5e1" }}>Privacy Policy (DPDP)</Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: "#cbd5e1" }}>Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.875rem" }}>
              <div>
                <span style={{ color: "#94a3b8", display: "block", fontSize: "0.75rem", marginBottom: "2px" }}>General & Corporate:</span>
                <a href="mailto:vicancodeofficial@gmail.com" style={{ color: "#ffffff", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Mail size={14} color="#818cf8" />
                  <span>vicancodeofficial@gmail.com</span>
                </a>
              </div>

              <div>
                <span style={{ color: "#94a3b8", display: "block", fontSize: "0.75rem", marginBottom: "2px" }}>DGate Enterprise Sales:</span>
                <a href="mailto:sales@dgate.in" style={{ color: "#ffffff", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Mail size={14} color="#34d399" />
                  <span>sales@dgate.in</span>
                </a>
              </div>

              <div>
                <span style={{ color: "#94a3b8", display: "block", fontSize: "0.75rem", marginBottom: "2px" }}>Phone / WhatsApp:</span>
                <a href="tel:+918607143370" style={{ color: "#ffffff", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Phone size={14} color="#38bdf8" />
                  <span>+91 86071 43370</span>
                </a>
                <a href="tel:+918708572459" style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                  <Phone size={14} color="#64748b" />
                  <span>+91 870 857 2459</span>
                </a>
              </div>

              <div style={{
                marginTop: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                color: "#34d399",
                fontSize: "0.75rem"
              }}>
                <Lock size={12} />
                <span>SSL 256-Bit Encrypted Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "0.8125rem",
          color: "#94a3b8"
        }}>
          <div>
            © 2026 <strong style={{ color: "#f8fafc" }}>Vican Code Private Limited</strong>. All Rights Reserved. CIN: U62012PB2026PTC069843.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ color: "#94a3b8" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "#94a3b8" }}>Terms of Service</Link>
            <Link href="/pricing" style={{ color: "#94a3b8" }}>Pricing Models</Link>
            <span style={{ color: "#64748b" }}>Made with Indian Engineering Excellence</span>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
