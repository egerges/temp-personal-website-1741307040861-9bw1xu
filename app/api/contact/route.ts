import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Determine environment
    const isDev = process.env.NODE_ENV == "development";
    const logoUrl = isDev
      ? "http://localhost:3000/hero.png"
      : "https://eliogerges.com/hero.png";

    // Paths to email templates
    const contactConfirmationPath = path.join(process.cwd(), "app/api/contact", "emailTemplates", "contactConfirmation.html");
    const adminNotificationPath = path.join(process.cwd(), "app/api/contact", "emailTemplates", "adminNotification.html");

    // Read and process the user email template
    let userEmailTemplate = await fs.readFile(contactConfirmationPath, "utf-8");
    userEmailTemplate = userEmailTemplate
      .replace("{{LOGO_URL}}", logoUrl)
      .replace("{{NAME}}", name)
      .replace("{{MESSAGE}}", message);

    // Read and process the admin email template
    let adminEmailTemplate = await fs.readFile(adminNotificationPath, "utf-8");
    adminEmailTemplate = adminEmailTemplate
      .replace("{{LOGO_URL}}", logoUrl)
      .replace("{{NAME}}", name)
      .replace("{{EMAIL}}", email)
      .replace("{{PHONE}}", phone)
      .replace("{{SUBJECT}}", subject)
      .replace("{{MESSAGE}}", message);

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: +(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to user
    await transporter.sendMail({
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Confirmation of your message to Elio Gerges`,
      html: userEmailTemplate,
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: "info@eliogerges.com",
      subject: `New Message from ${name} - ${subject}`,
      html: adminEmailTemplate,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails." },
      { status: 500 }
    );
  }
}
