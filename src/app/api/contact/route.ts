import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill all fields." }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
  from: `"UniPlatform Contact" <${email}>`,
  to: process.env.SMTP_USER,
  subject: `New message from ${name}`,
  html: `
  <div style="font-family: 'Arial', sans-serif; background: #f0fdfa; padding: 40px 0;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      
      <!-- Header with Logo -->
      <div style="background: linear-gradient(to right, #14b8a6, #10b981); padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin-top: 10px; font-size: 24px;">New Contact Message</h2>
      </div>
      
      <!-- Body -->
      <div style="padding: 30px; color: #1f2937;">
        <p style="font-size: 16px; margin-bottom: 20px;">You have received a new message from your <strong>UniPlatform Contact Form</strong>:</p>

        <table style="width:100%; border-collapse: collapse;">
          <tr>
            <td style="font-weight:bold; padding: 8px; border: 1px solid #e5e7eb; background: #f0fdfa;">Name:</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight:bold; padding: 8px; border: 1px solid #e5e7eb; background: #f0fdfa;">Email:</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight:bold; padding: 8px; border: 1px solid #e5e7eb; background: #f0fdfa;">Message:</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">
          This message was sent via <strong>UniPlatform</strong>, your university’s official online meeting platform.
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #f0fdfa; text-align: center; padding: 15px; font-size: 12px; color: #6b7280;">
        UniPlatform • University Zoom Meeting Platform • <a href="https://connectralanding.vercel.app/" style="color:#10b981; text-decoration:none;">Visit our website</a>
      </div>

    </div>
  </div>
  `,
});


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
