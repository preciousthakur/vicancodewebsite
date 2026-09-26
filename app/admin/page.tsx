"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Lock, 
  User, 
  KeyRound, 
  LogOut, 
  Search, 
  Phone, 
  Mail, 
  MessageCircle, 
  Trash2, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Building2,
  Calendar,
  AlertCircle,
  Eye,
  EyeOff
} from "lucide-react";

interface Lead {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "contacted" | "closed";
}

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [actionMsg, setActionMsg] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/admin/leads");
      if (res.status === 401) {
        setAuthed(false);
        setLeads([]);
      } else if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setAuthed(true);
      }
    } catch {
      setAuthed(false);
    } finally {
      setLoadingLeads(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      setAuthed(true);
      fetchLeads();
    } catch (err: any) {
      setLoginError(err.message || "Invalid credentials");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setPassword("");
    setLeads([]);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus as any } : lead))
        );
        setActionMsg("Status updated successfully");
        setTimeout(() => setActionMsg(""), 3000);
      }
    } catch {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete inquiry from ${name}?`)) return;

    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((lead) => lead.id !== id));
        setActionMsg("Lead deleted");
        setTimeout(() => setActionMsg(""), 3000);
      }
    } catch {
      alert("Failed to delete lead");
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID,Date,Name,Email,Phone,Product,Message,Status\n"];
    const rows = leads.map((l) =>
      [
        l.id,
        new Date(l.createdAt).toLocaleString("en-IN"),
        `"${(l.name || "").replace(/"/g, '""')}"`,
        l.email,
        l.phone,
        `"${(l.subject || "").replace(/"/g, '""')}"`,
        `"${(l.message || "").replace(/"/g, '""')}"`,
        l.status || "new"
      ].join(",")
    );

    const blob = new Blob([...headers, rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `vican_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      l.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === "all" || (l.status || "new") === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Loading Initial Auth State
  if (authed === null) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#818cf8", display: "flex", alignItems: "center", gap: "10px" }}>
          <RefreshCw size={24} className="animate-spin" />
          <span>Verifying secure admin session...</span>
        </div>
      </div>
    );
  }

  // ─── LOGIN SCREEN ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div className="glass-card" style={{
          width: "100%",
          maxWidth: "440px",
          padding: "44px 36px",
          borderColor: "rgba(99, 102, 241, 0.3)",
          background: "linear-gradient(135deg, rgba(16, 22, 38, 0.95) 0%, rgba(13, 18, 31, 0.98) 100%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(99, 102, 241, 0.25)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              margin: "0 auto 16px auto",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
            }}>
              <Lock size={26} />
            </div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
              Admin Portal
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Vican Code Private Limited · Internal Leads Desk
            </p>
          </div>

          {loginError && (
            <div style={{
              background: "rgba(244, 63, 94, 0.12)",
              border: "1px solid rgba(244, 63, 94, 0.3)",
              borderRadius: "10px",
              padding: "12px 16px",
              color: "#f43f5e",
              fontSize: "0.85rem",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <AlertCircle size={16} />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                Username
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 40px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
                <User size={16} color="#64748b" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 40px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
                <KeyRound size={16} color="#64748b" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
            >
              {loginLoading ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Access Leads Dashboard</span>
              )}
            </button>
          </form>

          <div style={{ marginTop: "24px", textAlign: "center", fontSize: "0.75rem", color: "#64748b" }}>
            🔒 Protected by Encrypted HMAC Session Cookies
          </div>
        </div>
      </div>
    );
  }

  // ─── AUTHENTICATED DASHBOARD ───────────────────────────────────────────────
  const countNew = leads.filter((l) => (l.status || "new") === "new").length;
  const countInProgress = leads.filter((l) => l.status === "in_progress").length;
  const countContacted = leads.filter((l) => l.status === "contacted").length;

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Top Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "32px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          paddingBottom: "24px"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span className="badge-pill" style={{ background: "rgba(16, 185, 129, 0.12)", color: "#34d399", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                <ShieldCheck size={14} />
                <span>Authenticated Admin Session</span>
              </span>
              {actionMsg && (
                <span style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: 600 }}>
                  ✓ {actionMsg}
                </span>
              )}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff" }}>
              Vican Code Leads Portal
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <button onClick={fetchLeads} className="btn-secondary btn-sm" disabled={loadingLeads}>
              <RefreshCw size={14} className={loadingLeads ? "animate-spin" : ""} />
              <span>Refresh</span>
            </button>

            <button onClick={exportCSV} className="btn-secondary btn-sm">
              <Download size={14} />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="btn-secondary btn-sm"
              style={{ borderColor: "rgba(244, 63, 94, 0.3)", color: "#f43f5e" }}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "32px"
        }} className="admin-stats">
          <div className="glass-card" style={{ padding: "24px" }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700, marginBottom: "8px" }}>
              Total Inquiries
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff" }}>{leads.length}</div>
          </div>

          <div className="glass-card" style={{ padding: "24px", borderColor: "rgba(16, 185, 129, 0.3)" }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#34d399", fontWeight: 700, marginBottom: "8px" }}>
              New Leads
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#34d399" }}>{countNew}</div>
          </div>

          <div className="glass-card" style={{ padding: "24px", borderColor: "rgba(245, 158, 11, 0.3)" }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fbbf24", fontWeight: 700, marginBottom: "8px" }}>
              In Progress
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fbbf24" }}>{countInProgress}</div>
          </div>

          <div className="glass-card" style={{ padding: "24px", borderColor: "rgba(99, 102, 241, 0.3)" }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#818cf8", fontWeight: 700, marginBottom: "8px" }}>
              Contacted
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#818cf8" }}>{countContacted}</div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
          flexWrap: "wrap"
        }}>
          {/* Search */}
          <div style={{ position: "relative", flex: 1, minWidth: "260px" }}>
            <input
              type="text"
              placeholder="Search by name, email, phone, or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px 12px 40px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                fontSize: "0.9rem",
                outline: "none"
              }}
            />
            <Search size={16} color="#64748b" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
          </div>

          {/* Status Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                background: "#0d121f",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                fontSize: "0.85rem",
                outline: "none"
              }}
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-card" style={{ overflowX: "auto", padding: 0 }}>
          {filteredLeads.length === 0 ? (
            <div style={{ padding: "60px 20px", textAlign: "center", color: "#94a3b8" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "6px" }}>
                No inquiries found
              </div>
              <p style={{ fontSize: "0.85rem" }}>
                {searchQuery ? "Try refining your search filter." : "New leads submitted through the website will appear here in real-time."}
              </p>
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.03)", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  <th style={{ padding: "16px 20px" }}>Date</th>
                  <th style={{ padding: "16px 20px" }}>Client</th>
                  <th style={{ padding: "16px 20px" }}>Contact</th>
                  <th style={{ padding: "16px 20px" }}>Product</th>
                  <th style={{ padding: "16px 20px", maxWidth: "260px" }}>Message</th>
                  <th style={{ padding: "16px 20px" }}>Status</th>
                  <th style={{ padding: "16px 20px", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => {
                  const whatsappLink = `https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${lead.name}, regarding your inquiry for ${lead.subject} with Vican Code...`
                  )}`;

                  return (
                    <tr
                      key={lead.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        transition: "background 0.15s ease"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Date */}
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap", color: "#94a3b8", fontSize: "0.8rem" }}>
                        <div style={{ color: "#cbd5e1", fontWeight: 600 }}>
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                        </div>
                        <div>
                          {new Date(lead.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </td>

                      {/* Client */}
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                        <strong style={{ color: "#ffffff", display: "block" }}>{lead.name}</strong>
                        <span className="text-mono" style={{ fontSize: "0.7rem", color: "#64748b" }}>{lead.id}</span>
                      </td>

                      {/* Contact Channels */}
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <a href={`tel:${lead.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#38bdf8", fontWeight: 600 }}>
                            <Phone size={12} />
                            <span>{lead.phone}</span>
                          </a>
                          <a href={`mailto:${lead.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "0.8rem" }}>
                            <Mail size={12} />
                            <span>{lead.email}</span>
                          </a>
                        </div>
                      </td>

                      {/* Product */}
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                        <span style={{
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: "rgba(99, 102, 241, 0.12)",
                          color: "#a5b4fc",
                          border: "1px solid rgba(99, 102, 241, 0.25)",
                          fontSize: "0.75rem",
                          fontWeight: 600
                        }}>
                          {lead.subject}
                        </span>
                      </td>

                      {/* Message */}
                      <td style={{ padding: "16px 20px", maxWidth: "260px" }}>
                        <div style={{
                          color: "#cbd5e1",
                          fontSize: "0.825rem",
                          lineHeight: 1.5,
                          maxHeight: "60px",
                          overflowY: "auto"
                        }}>
                          {lead.message}
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                        <select
                          value={lead.status || "new"}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            outline: "none",
                            cursor: "pointer",
                            background:
                              (lead.status || "new") === "new"
                                ? "rgba(16, 185, 129, 0.15)"
                                : lead.status === "in_progress"
                                ? "rgba(245, 158, 11, 0.15)"
                                : lead.status === "contacted"
                                ? "rgba(99, 102, 241, 0.15)"
                                : "rgba(148, 163, 184, 0.15)",
                            color:
                              (lead.status || "new") === "new"
                                ? "#34d399"
                                : lead.status === "in_progress"
                                ? "#fbbf24"
                                : lead.status === "contacted"
                                ? "#818cf8"
                                : "#94a3b8",
                            border: "1px solid rgba(255, 255, 255, 0.1)"
                          }}
                        >
                          <option value="new" style={{ background: "#0d121f", color: "#34d399" }}>● New</option>
                          <option value="in_progress" style={{ background: "#0d121f", color: "#fbbf24" }}>● In Progress</option>
                          <option value="contacted" style={{ background: "#0d121f", color: "#818cf8" }}>● Contacted</option>
                          <option value="closed" style={{ background: "#0d121f", color: "#94a3b8" }}>● Closed</option>
                        </select>
                      </td>

                      {/* Action buttons */}
                      <td style={{ padding: "16px 20px", textAlign: "right", whiteSpace: "nowrap" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat on WhatsApp"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              background: "rgba(37, 211, 102, 0.15)",
                              color: "#25D366",
                              border: "1px solid rgba(37, 211, 102, 0.3)"
                            }}
                          >
                            <MessageCircle size={14} />
                          </a>

                          <button
                            type="button"
                            onClick={() => handleDelete(lead.id, lead.name)}
                            title="Delete Lead"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              background: "rgba(244, 63, 94, 0.1)",
                              color: "#f43f5e",
                              border: "1px solid rgba(244, 63, 94, 0.25)"
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
