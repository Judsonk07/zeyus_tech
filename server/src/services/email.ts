import { Resend } from 'resend';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[EMAIL] RESEND_API_KEY not set. Emails will not be sent.');
    return null;
  }
  return new Resend(apiKey);
};

// The "from" address — using Resend's free shared domain (no domain setup needed)
const FROM_ADDRESS = 'Zeyus Technologies <onboarding@resend.dev>';
const NOTIFY_EMAIL = process.env.NOTIFICATION_EMAIL || 'judsonkoilraj573@gmail.com';

export const sendContactNotification = async (data: any) => {
  const resend = getResend();
  if (!resend) {
    console.log('[EMAIL MOCK] Would send contact notification for:', data.name, data.email);
    return;
  }

  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0F172A; padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #38BDF8;">Zeyus Technologies</h2>
        <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 14px;">New Contact Form Submission</p>
      </div>
      <div style="padding: 24px; color: #1e293b; background-color: #ffffff;">
        <p style="font-size: 16px; margin-top: 0;">You have received a new inquiry:</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Client Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 8px 0;">${data.phone || 'Not Provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td><td style="padding: 8px 0;"><span style="background-color: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 12px;">${data.serviceInterest || data.service}</span></td></tr>
        </table>
        <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #38bdf8; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155;">Message:</p>
          <p style="margin: 0; color: #475569; line-height: 1.6;">${data.message}</p>
        </div>
      </div>
      <div style="background-color: #f8fafc; padding: 12px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0;">
        © ${new Date().getFullYear()} Zeyus Technologies · Perundurai, Erode
      </div>
    </div>
  `;

  const autoReplyHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0F172A; padding: 24px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #38BDF8;">Zeyus Technologies</h2>
        <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 14px;">Building Digital Success · Empowering Talent</p>
      </div>
      <div style="padding: 28px; color: #1e293b; background-color: #ffffff; line-height: 1.6;">
        <p style="font-size: 18px; font-weight: bold; margin-top: 0; color: #0F172A;">Hello ${data.name},</p>
        <p>Thank you for reaching out to <strong>Zeyus Technologies</strong>!</p>
        <p>We have received your inquiry regarding <strong>${data.serviceInterest || data.service}</strong>. Our team will get back to you within 24 hours.</p>
        <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #bfdbfe;">
          <p style="margin: 0; font-size: 14px; color: #1e40af;"><strong>Need urgent help?</strong><br/>Call us: <a href="tel:+917708796429" style="color: #2563eb;">+91 7708796429</a></p>
        </div>
        <p style="margin-bottom: 0;">Warm regards,<br/><strong>Judson K</strong><br/><span style="color: #64748b; font-size: 13px;">Founder &amp; CEO, Zeyus Technologies</span></p>
      </div>
    </div>
  `;

  try {
    // 1. Notify admin (Judson)
    const { error: err1 } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_EMAIL,
      subject: `🚀 New Lead: ${data.name} — ${data.serviceInterest || data.service}`,
      html: notificationHtml,
    });
    if (err1) {
      console.error('[EMAIL] Notification send error:', err1);
    } else {
      console.log(`✅ EMAIL: Lead notification sent to ${NOTIFY_EMAIL}`);
    }

    // 2. Auto-reply to client
    const { error: err2 } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: data.email,
      subject: `Thank you for contacting Zeyus Technologies, ${data.name}!`,
      html: autoReplyHtml,
    });
    if (err2) {
      console.error('[EMAIL] Auto-reply send error:', err2);
    } else {
      console.log(`✅ EMAIL: Auto-reply sent to ${data.email}`);
    }
  } catch (error: any) {
    console.error('[EMAIL] Unexpected error:', error.message);
  }
};

export const sendCourseInquiryNotification = async (data: any) => {
  const resend = getResend();
  if (!resend) {
    console.log('[EMAIL MOCK] Would send course inquiry notification for:', data.name);
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0F172A; padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #7C3AED;">Zeyus Academy</h2>
        <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 14px;">New Course Inquiry</p>
      </div>
      <div style="padding: 24px; color: #1e293b; background-color: #ffffff;">
        <p><strong>Student Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #7C3AED;">${data.email}</a></p>
        <p><strong>Course Interest:</strong> ${data.courseInterest}</p>
        <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_EMAIL,
      subject: `🎓 New Course Lead: ${data.name} — ${data.courseInterest}`,
      html,
    });
    if (error) {
      console.error('[EMAIL] Course inquiry send error:', error);
    } else {
      console.log(`✅ EMAIL: Course inquiry notification sent to ${NOTIFY_EMAIL}`);
    }
  } catch (error: any) {
    console.error('[EMAIL] Unexpected error:', error.message);
  }
};
