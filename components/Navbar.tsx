"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "SaaS Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(7, 9, 14, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      transition: "all 0.3s ease"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "76px"
      }}>
        {/* Official Vican Code Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src="/assets/images/resources/logo-3.png" 
            alt="Vican Code Private Limited" 
            style={{ 
              height: "44px", 
              width: "auto", 
              maxWidth: "200px",
              objectFit: "contain",
              display: "block"
            }} 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "0.925rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#ffffff" : "#94a3b8",
                  position: "relative",
                  padding: "6px 0",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#94a3b8";
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                    borderRadius: "2px"
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="desktop-cta">
          <Link
            href="/products"
            className="btn-primary btn-sm"
            style={{ borderRadius: "10px" }}
          >
            <Sparkles size={14} />
            <span>Flagship SaaS</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            color: "#ffffff",
            padding: "8px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--border-subtle)"
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          background: "#0d121f",
          borderTop: "1px solid var(--border-subtle)",
          padding: "20px 24px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: pathname === link.href ? "#818cf8" : "#cbd5e1",
                padding: "8px 0"
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Explore 6 Flagship SaaS Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
