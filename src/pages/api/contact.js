import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, company, message, action } = req.body || {};

  // Validate required fields
  if (!name || !email || !company || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
  const missingEnv = requiredEnv.filter((k) => !process.env[k]);
  if (missingEnv.length > 0) {
    console.error('Missing SMTP env vars:', missingEnv.join(', '));
    return res.status(500).json({
      success: false,
      message: 'Email service is not configured. Please try again later.',
    });
  }

  const recipient = process.env.CONTACT_RECIPIENT || process.env.SMTP_USER;

  // Determine subject based on action
  const subject =
    action === 'investor'
      ? `[Investor Contact] ${name} from ${company}`
      : `[Demo Request] ${name} from ${company}`;

  // Build email content
  const emailContent = `
Name: ${name}
Company: ${company}
Email: ${email}
Action: ${action === 'investor' ? 'Investor Contact' : 'Demo Request'}

Message:
${message}
  `.trim();

  try {
    const port = Number(process.env.SMTP_PORT || 587);
    const secure =
      String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      ...(secure
        ? {}
        : {
            // Typical for 587/STARTTLS (IONOS commonly uses this)
            requireTLS: true,
          }),
      tls: {
        minVersion: 'TLSv1.2',
      },
    });

    await transporter.sendMail({
      from: `"DragonFlyPads" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject,
      text: emailContent,
      replyTo: email,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    });
  } catch (error) {
    console.error('SMTP send error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
    });
  }
}
