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
    const { fullName, email, phone, budget, projectType, pricingMode, message } = req.body;

    // Validation
    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !budget?.trim() || !projectType || !pricingMode || !message?.trim()) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">New Project Inquiry</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Phone:</strong> ${phone}</p>
          </div>

          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Project Type:</strong> ${projectType}</p>
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Estimated Budget:</strong> ${budget}</p>
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Pricing Mode:</strong> ${pricingMode}</p>
          </div>

          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; margin: 0;">This is an automated message from your portfolio website</p>
          </div>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gpritamneetaspirant@gmail.com',
      subject: `New Project Inquiry from ${fullName}`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, id: response.data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
