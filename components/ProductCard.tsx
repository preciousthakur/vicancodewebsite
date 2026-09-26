"use client";

import React from "react";
import { ExternalLink, Check, ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  category: string;
  badge: string;
  badgeColor?: string;
  description: string;
  features: string[];
  url: string;
  pricingPreview?: string;
  icon?: React.ReactNode;
}

export default function ProductCard({
  title,
  category,
  badge,
  badgeColor = "#6366f1",
  description,
  features,
  url,
  pricingPreview,
  icon
}: ProductCardProps) {
  return (
    <div className="glass-card" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "32px",
      height: "100%",
      position: "relative"
    }}>
      {/* Top Header */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: `linear-gradient(135deg, ${badgeColor}22, ${badgeColor}44)`,
            border: `1px solid ${badgeColor}66`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff"
          }}>
            {icon}
          </div>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 700,
            background: `${badgeColor}18`,
            color: badgeColor,
            border: `1px solid ${badgeColor}40`
          }}>
            <span className="pulse-dot" style={{ backgroundColor: badgeColor, boxShadow: `0 0 8px ${badgeColor}` }} />
            {badge}
          </div>
        </div>

        <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700, marginBottom: "4px" }}>
          {category}
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px", letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.925rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
          {description}
        </p>

        {/* Feature Checkpoints */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "20px",
          marginBottom: "24px"
        }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            Key Capabilities
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {features.map((feature, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.875rem", color: "#cbd5e1" }}>
                <Check size={16} color={badgeColor} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer & Outbound Link */}
      <div>
        {pricingPreview && (
          <div style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "8px",
            padding: "8px 12px",
            fontSize: "0.8rem",
            color: "#38bdf8",
            fontWeight: 600,
            marginBottom: "16px"
          }}>
            {pricingPreview}
          </div>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{
            width: "100%",
            justifyContent: "space-between",
            borderColor: `${badgeColor}40`,
            padding: "12px 18px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = badgeColor;
            e.currentTarget.style.boxShadow = `0 0 15px ${badgeColor}33`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${badgeColor}40`;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9rem" }}>
            Launch {title}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: badgeColor, fontSize: "0.8rem" }}>
            <span>Live Platform</span>
            <ExternalLink size={14} />
          </div>
        </a>
      </div>
    </div>
  );
}
