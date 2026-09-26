"use client";

import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MessageSquare,
  MessageCircle,
  Loader2,
  RefreshCw
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "DGate Society OS",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please call or WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/918607143370?text=${encodeURIComponent(
    `Hello Vican Code Team, my name is ${formData.name || "Client"}. I am inquiring about ${formData.subject}. My contact: ${formData.phone || ""}.`
  )}`;

  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <MessageSquare size={14} />
              <span>Direct Communication Desk</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "18px" }}>
            Get in Touch With Our Team
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "780px", margin: "0 auto", lineHeight: 1.6 }}>
            Inquire about implementing <strong style={{ color: "#ffffff" }}>DGate</strong> for your gated community, deploying <strong style={{ color: "#ffffff" }}>Educan</strong>, or partnering on custom software engineering.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px" }} className="contact-grid">
          {/* Contact Form */}
          <div className="glass-card" style={{ padding: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
              Send an Inquiry
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "28px" }}>
              All inquiries are routed to <strong style={{ color: "#38bdf8" }}>vicancodeofficial@gmail.com</strong> and our executive desk in Derabassi.
            </p>

            {submitted ? (
              <div style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                borderRadius: "16px",
                padding: "36px 28px",
                textAlign: "center"
              }}>
                <CheckCircle2 size={52} color="#34d399" style={{ margin: "0 auto 16px auto" }} />
                <h4 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                  Inquiry Received & Dispatched!
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.925rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been securely recorded in our database and forwarded to our leadership at <span style={{ color: "#38bdf8" }}>vicancodeofficial@gmail.com</span>.
                </p>

                {/* Instant Connect Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "380px", margin: "0 auto 24px auto" }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ background: "#25D366", borderColor: "#22c55e", color: "#ffffff" }}
                  >
                    <MessageCircle size={18} />
                    <span>Instant Chat on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+918607143370"
                    className="btn-secondary"
                  >
                    <Phone size={16} color="#34d399" />
                    <span>Call Helpline: +91 86071 43370</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "DGate Society OS", message: "" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#94a3b8",
                    fontSize: "0.85rem",
                    padding: "6px 12px",
                    borderRadius: "6px"
                  }}
                >
                  <RefreshCw size={13} />
                  <span>Send another inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {errorMsg && (
                  <div style={{ background: "rgba(244, 63, 94, 0.12)", border: "1px solid rgba(244, 63, 94, 0.3)", padding: "12px 16px", borderRadius: "8px", color: "#f43f5e", fontSize: "0.875rem" }}>
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                    Product / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "#0d121f",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  >
                    <option value="DGate Society OS">DGate — Smart Society Management & Gate OS</option>
                    <option value="Educan School ERP">Educan — Cloud School Management ERP</option>
                    <option value="PracEasy CA SaaS">PracEasy — CA Practice Compliance SaaS</option>
                    <option value="VicanTools WebAssembly">VicanTools — WebAssembly Tools Inquiry</option>
                    <option value="VicanThemes Marketplace">VicanThemes — Developer Templates & Licensing</option>
                    <option value="Custom Engineering">Custom Web / Mobile Application Development</option>
                    <option value="Corporate Governance">Corporate Governance / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your society name, student count, or project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary" 
                  style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Inquiry to Vican Code</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Corporate Office Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="glass-card" style={{ padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Building2 size={24} color="#818cf8" />
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
                  Registered Office
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.925rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#cbd5e1" }}>
                  <MapPin size={20} color="#34d399" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "#ffffff", display: "block" }}>Vican Code Private Limited</strong>
                    <span>#211, Ecogreen 1, Gulabgarh Road, Derabassi, Punjab 140507, India</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1" }}>
                  <Phone size={18} color="#38bdf8" />
                  <div>
                    <a href="tel:+918607143370" style={{ color: "#ffffff", display: "block" }}>+91 86071 43370</a>
                    <a href="tel:+918708572459" style={{ color: "#94a3b8", fontSize: "0.85rem" }}>+91 870 857 2459</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1" }}>
                  <Mail size={18} color="#f59e0b" />
                  <a href="mailto:vicancodeofficial@gmail.com" style={{ color: "#ffffff" }}>
                    vicancodeofficial@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Product Specific Channels */}
            <div className="glass-card" style={{ padding: "32px", background: "rgba(13, 18, 31, 0.6)" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
                Product Support & Sales Channels
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                  <span style={{ color: "#cbd5e1" }}>DGate Society Sales</span>
                  <a href="mailto:sales@dgate.in" style={{ color: "#34d399", fontWeight: 600 }}>sales@dgate.in</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                  <span style={{ color: "#cbd5e1" }}>DGate Helpdesk</span>
                  <a href="mailto:support@dgate.in" style={{ color: "#38bdf8", fontWeight: 600 }}>support@dgate.in</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#cbd5e1" }}>Corporate Legal & CIN</span>
                  <span className="text-mono" style={{ color: "#818cf8" }}>U62012PB2026PTC069843</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
