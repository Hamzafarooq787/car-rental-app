import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!); // ✅ API key from env

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("📨 Booking/Contact data received:", data);

    // Use your verified domain here
    const fromEmail = "Royalerides Website <onboarding@resend.dev>";


    // Send email to your inbox
    const resendResponse = await resend.emails.send({
      from: fromEmail,
      to: ["Royalerideltd@gmail.com"], // your email
      // reply_to: data.email, // user email so you can reply directly
      subject: `🚗 New Booking/Contact Request - ${new Date().toLocaleDateString('en-GB')}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { color: #002462; border-bottom: 3px solid #BF9B30; padding-bottom: 15px; margin-bottom: 20px; }
            .info-box { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .label { color: #002462; font-weight: bold; display: inline-block; width: 120px; }
            .footer { margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚗 New Booking/Contact Request</h2>
              <p>From Royalerides Website</p>
            </div>

            <div class="info-box">
              <p><span class="label">📍 Pickup:</span> ${data.pickup || 'Not provided'}</p>
              <p><span class="label">🎯 Dropoff:</span> ${data.dropoff || 'Not provided'}</p>
              <p><span class="label">📅 Date:</span> ${data.pickupDate || 'Not provided'}</p>
              <p><span class="label">⏰ Time:</span> ${data.pickupTime || 'Not provided'}</p>
              <p><span class="label">📝 Name:</span> ${data.name || 'Not provided'}</p>
              <p><span class="label">📧 Email:</span> ${data.email || 'Not provided'}</p>
              <p><span class="label">📞 Phone:</span> ${data.phone || 'Not provided'}</p>
            </div>

            <p><strong>📋 Message / Details:</strong></p>
            <p>${data.message || 'No message provided'}</p>

            <div class="footer">
              <p><strong>Royalerides Chauffeur Services</strong></p>
              <p>📧 info@royalerides.co.uk | 📞 +44 7310 236707</p>
              <p>This email was sent automatically from your website contact/booking form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("✅ Email sent successfully:", resendResponse);

    return NextResponse.json({
      success: true,
      message: "Booking/contact request sent to Royalerideltd@gmail.com",
      data: resendResponse,
    });

  } catch (err) {
    console.error("❌ Server error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Server error occurred",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
