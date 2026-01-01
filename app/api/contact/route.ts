import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✉️ Email to USER
    await transporter.sendMail({
      from: `"Royal Rides" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.CLIENT_EMAIL, // 👈 client gets replies
      subject: "Your enquiry has been received",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting Royal Rides.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Reply to this email to reach our team directly.</p>
      `,
    });

    // ✉️ Copy to CLIENT (FYI)
    await transporter.sendMail({
      from: `"Royal Rides Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "New Website Enquiry",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}
