import React from "react";
import Link from "next/link";
import { 
  Code2, 
  Smartphone, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Database,
  Cpu,
  CheckCircle2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Software Development Services | Vican Code Private Limited",
  description: "Enterprise software development, full-stack web applications, Flutter mobile apps, cloud infrastructure, and UI/UX design systems by Vican Code Private Limited.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 size={32} color="#6366f1" />,
      title: "Enterprise Web Applications",
      description: "Custom web applications built on modern architectures: Next.js, React, Node.js, and TypeScript. Optimized for sub-second page loads, SEO, and high concurrent workloads.",
      deliverables: ["Next.js & React Full-Stack Apps", "REST & GraphQL API Engineering", "Microservices & Headless Systems", "Enterprise Admin Dashboards"]
    },
    {
      icon: <Smartphone size={32} color="#06b6d4" />,
      title: "Mobile App Engineering",
      description: "Cross-platform iOS and Android mobile solutions engineered in Flutter and React Native. Featuring fluid 60fps native performance, biometric authentication, and offline synchronization.",
      deliverables: ["Flutter Cross-Platform Development", "Native iOS (Swift) & Android (Kotlin)", "Push Notification & Geofencing Systems", "Payment Gateway & In-App Purchases"]
    },
    {
      icon: <Server size={32} color="#10b981" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Cloud-native architectures on AWS and Google Cloud with Docker containerization, Kubernetes orchestration, zero-downtime CI/CD deployment pipelines, and 24/7 monitoring.",
      deliverables: ["AWS Multi-AZ Cloud Architecture", "Docker & Kubernetes Orchestration", "CI/CD Pipelines (GitHub Actions)", "Automated Backup & Disaster Recovery"]
    },
    {
      icon: <Layers size={32} color="#f59e0b" />,
      title: "UI/UX & Design Systems",
      description: "User-centric interface design and design token systems created in Figma. We craft intuitive user journeys that maximize conversion rates and reduce user learning curves.",
      deliverables: ["Figma Enterprise Design Systems", "High-Fidelity Wireframes & Prototypes", "Accessible WCAG 2.1 Compliant UI", "Micro-Interactions & Motion Design"]
    },
    {
      icon: <Database size={32} color="#ec4899" />,
      title: "Database Engineering & Big Data",
      description: "Relational and NoSQL database modeling, query optimization, high-throughput caching with Redis, and data pipeline ETL engineering for reliable enterprise reporting.",
      deliverables: ["PostgreSQL & MySQL Database Sharding", "Redis Caching & Session Management", "Elasticsearch & Vector Search", "Secure Automated Data Migrations"]
    },
    {
      icon: <Cpu size={32} color="#8b5cf6" />,
      title: "WebAssembly & Client-Side Engines",
      description: "Pioneering browser-native computation using WebAssembly (Rust/C++). We build ultra-private tools that process complex files on the client side with zero server dependency.",
      deliverables: ["Rust to WebAssembly Compilation", "Client-Side Image & PDF Processing", "Zero-Knowledge Data Handlers", "Offline-First Progressive Web Apps"]
    }
  ];

  return (
    <div style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-pill">
              <Sparkles size={14} />
              <span>Full-Cycle Engineering</span>
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "18px" }}>
            Custom Software & Cloud Services
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#94a3b8", maxWidth: "780px", margin: "0 auto", lineHeight: 1.6 }}>
            In addition to operating our 6 flagship SaaS platforms, <strong style={{ color: "#ffffff" }}>Vican Code Private Limited</strong> delivers dedicated product engineering and custom cloud development for enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3" style={{ marginBottom: "80px" }}>
          {services.map((service, index) => (
            <div key={index} className="glass-card" style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ marginBottom: "20px" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.925rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
                  {service.description}
                </p>

                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "16px", marginBottom: "24px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: "10px" }}>
                    Key Deliverables
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#cbd5e1" }}>
                        <CheckCircle2 size={14} color="#818cf8" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/contact" className="btn-secondary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <span>Inquire About {service.title}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass-card" style={{ padding: "48px", background: "linear-gradient(135deg, rgba(16, 22, 38, 0.9) 0%, rgba(30, 27, 75, 0.4) 100%)" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
              Our Engineering Lifecycle
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              From initial architectural blueprinting to automated deployment and SLA maintenance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="process-grid">
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#818cf8", marginBottom: "8px" }}>01</div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>Architecture & Scope</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Detailed technical specifications, database schema design, and security audit plans.</p>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#38bdf8", marginBottom: "8px" }}>02</div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>UI/UX & Prototyping</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Component-driven design systems in Figma with interactive responsive prototypes.</p>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#34d399", marginBottom: "8px" }}>03</div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>Sprint Development</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Bi-weekly agile sprints with automated CI/CD staging environments and test coverage.</p>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f59e0b", marginBottom: "8px" }}>04</div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>Launch & 24/7 SLA</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.825rem", lineHeight: 1.5 }}>Zero-downtime production deployment, security hardening, and dedicated engineering support.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
