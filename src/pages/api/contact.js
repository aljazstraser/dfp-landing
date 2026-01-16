export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message, action } = req.body;

  // Validate required fields
  if (!name || !email || !company || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // For testing - use flipsum0@gmail.com for both
  const recipient = 'flipsum0@gmail.com';
  
  // Determine subject based on action
  const subject = action === 'investor' 
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

  // For now, we'll use a simple approach
  // You can integrate with Resend, SendGrid, or Nodemailer later
  // For testing, we'll log and return success
  console.log('=== Contact Form Submission ===');
  console.log('To:', recipient);
  console.log('Subject:', subject);
  console.log('Content:', emailContent);
  console.log('==============================');

  // TODO: Replace with actual email service integration
  // Example with Resend (uncomment and add API key):
  /*
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contact@dragonflypads.com',
        to: recipient,
        subject: subject,
        text: emailContent,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ 
        success: true,
        message: 'Message sent successfully!' 
      });
    } else {
      console.error('Resend API error:', data);
      return res.status(500).json({ 
        success: false,
        message: 'Failed to send message. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Failed to send message. Please try again.' 
    });
  }
  */

  // For testing - return success (email will be logged to server console)
  return res.status(200).json({ 
    success: true,
    message: 'Message sent successfully! We will get back to you soon.' 
  });
}
