import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validation
    if (!email?.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">📬 New Newsletter Subscriber</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Great news! A new subscriber has joined your newsletter.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #555;">
              <strong style="color: #667eea;">Subscriber Email:</strong><br/>
              <span style="font-size: 18px; font-weight: bold; color: #333;">${email}</span>
            </p>
          </div>

          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              <strong>Subscribed at:</strong> ${new Date().toLocaleString()}<br/>
              <strong>Status:</strong> ✅ Active
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; margin: 0;">This is an automated notification from your portfolio website</p>
          </div>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gpritamneetaspirant@gmail.com',
      subject: `New Newsletter Subscriber: ${email}`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, id: response.data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
