import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    const lead = {
      id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      subject: String(subject || "General Inquiry").trim(),
      message: String(message).trim(),
      status: "new"
    };

    // 1. Store lead in data/leads.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "leads.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let leads = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (e) {
        leads = [];
      }
    }

    leads.unshift(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");

    // 2. Dispatch email if SMTP is configured
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "vicancodeofficial@gmail.com";

    let emailSent = false;
    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        await transporter.sendMail({
          from: `"Vican Code Website" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `[New Lead] ${subject.toUpperCase()} - ${name} (${phone})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #4f46e5; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Inquiry Received · Vican Code</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Name:</strong></td><td style="color: #0f172a;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="color: #0f172a;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="color: #0f172a;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Product / Subject:</strong></td><td style="color: #0f172a;">${subject}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Received At:</strong></td><td style="color: #0f172a;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #6366f1;">
                <strong>Message:</strong>
                <p style="margin: 8px 0 0 0; color: #334155; line-height: 1.5;">${message}</p>
              </div>
              <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                Vican Code Private Limited · Derabassi, Punjab · CIN: U62012PB2026PTC069843
              </div>
            </div>
          `
        });
        emailSent = true;
      } catch (err) {
        console.error("Failed to send lead email via SMTP:", err);
      }
    }

    return NextResponse.json({
      success: true,
      id: lead.id,
      emailSent,
      message: "Inquiry saved and forwarded to Vican Code management."
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
