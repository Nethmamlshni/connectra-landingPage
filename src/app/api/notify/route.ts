import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) return new Response("Email is required", { status: 400 })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
  from: `"UniPlatform Notifications" <${process.env.SMTP_USER}>`,
  to: process.env.SMTP_USER,
  subject: `New Notify Me Request`,
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UniPlatform Notification</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background:#f0f4f3;">
    
    <!-- Container -->
    <table align="center" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:white; border-radius:12px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #14B8A6, #10B981); padding:20px; text-align:center;">
                <h1 style="color:white; margin:0; font-size:24px;">UniPlatform Notification</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; text-align:center;">
                <h2 style="color:#14B8A6; font-size:20px; margin-bottom:15px;">New Notify Me Request</h2>
                <p style="font-size:16px; color:#333; margin-bottom:20px;">
                  Someone has requested to be notified when Mac & Linux version is released:
                </p>
                <p style="font-size:18px; font-weight:bold; color:#000;">${email}</p>

                <!-- Call-to-action button -->
                <a href="https://connectralanding.vercel.app/" target="_blank" style="display:inline-block; margin-top:25px; padding:12px 25px; font-size:16px; color:white; background:linear-gradient(135deg, #14B8A6, #10B981); border-radius:8px; text-decoration:none;">
                  Visit UniPlatform
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f0f4f3; padding:20px; text-align:center; font-size:12px; color:#666;">
                <p style="margin:0;">&copy; ${new Date().getFullYear()} UniPlatform. All rights reserved.</p>
                <p style="margin:5px 0 0 0;">
                  <a href="https://connectralanding.vercel.app/" style="color:#14B8A6; text-decoration:none;">Privacy Policy</a> | 
                  <a href="https://connectralanding.vercel.app/" style="color:#14B8A6; text-decoration:none;">Terms of Service</a>
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
    
  </body>
  </html>
  `,
});


    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response("Internal Server Error", { status: 500 })
  }
}
