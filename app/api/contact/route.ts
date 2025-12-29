import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        await resend.emails.send({
            from: "Noor <no-reply@yourdomain.com>",  // verified sender
            to: ["noorulainkashmiri00@gmail.com"],   // Inbox target
            subject: "New Contact Message",
            html: `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
