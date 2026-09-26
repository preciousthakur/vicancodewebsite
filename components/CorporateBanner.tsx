"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Building2, Phone, ArrowRight } from "lucide-react";

export default function CorporateBanner() {
  return (
    <div style={{
      background: "linear-gradient(90deg, #0c101d 0%, #1e1b4b 50%, #0c101d 100%)",
      borderBottom: "1px solid rgba(99, 102, 241, 0.25)",
      padding: "8px 0",
      fontSize: "0.8rem",
      color: "#cbd5e1",
      position: "relative",
      zIndex: 50
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            padding: "2px 8px",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "0.75rem",
            border: "1px solid rgba(16, 185, 129, 0.3)"
          }}>
            <ShieldCheck size={13} /> MCA GOVT. OF INDIA VERIFIED
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Building2 size={13} color="#818cf8" />
            <strong style={{ color: "#f8fafc" }}>Vican Code Private Limited</strong>
            <span style={{ opacity: 0.6 }}>|</span>
            <span className="text-mono" style={{ color: "#38bdf8", fontWeight: 600 }}>CIN: U62012PB2026PTC069843</span>
          </span>
          <span style={{ color: "#94a3b8", display: "none" }} className="d-desktop">
            Registered: Derabassi, Punjab 140507
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+918607143370" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94a3b8" }}>
            <Phone size={12} color="#34d399" />
            <span>+91 86071 43370</span>
          </a>
          <Link href="/privacy-policy" style={{ color: "#a5b4fc", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>DPDP & Legal Compliance</span>
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}
