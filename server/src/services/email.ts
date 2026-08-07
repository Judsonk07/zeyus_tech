import nodemailer from 'nodemailer';

const createTransporter = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn('[EMAIL] SMTP_USER or SMTP_PASS not set. Emails will not be sent.');
    return null;
  }

  console.log(`[EMAIL] Creating transporter for: ${smtpUser}`);

  // Use explicit SSL (port 465) — works reliably from cloud servers (Render, etc.)
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL — required for cloud server IPs
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certs in cloud environments
    }
  });
};

export const sendContactNotification = async (data: any) => {
  const transporter = createTransporter();
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'judsonkoilraj573@gmail.com';

  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded-radius: 12px; overflow: hidden;">
      <div style="background-color: #0F172A; padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #38BDF8;">Zeyus Technologies</h2>
        <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 14px;">New Contact Form Submission</p>
      </div>
      <div style="padding: 24px; color: #1e293b; background-color: #ffffff;">
        <p style="font-size: 16px; margin-top: 0;">You have received a new inquiry on <strong>Zeyus Technologies</strong>:</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Client Name:</td>
            <td style="padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 8px 0;">${data.phone || 'Not Provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Interest:</td>
            <td style="padding: 8px 0;"><span style="background-color: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 12px;">${data.serviceInterest}</span></td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #38bdf8; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155;">Message:</p>
          <p style="margin: 0; color: #475569; line-height: 1.6;">${data.message}</p>
        </div>
      </div>
      <div style="background-color: #f8fafc; padding: 12px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0;">
        © ${new Date().getFullYear()} Zeyus Technologies. Sent from your official website contact endpoint.
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('[SMTP MOCK] SMTP details not configured yet in server/.env.');
    console.log(`[SMTP MOCK] Would notify: ${notificationEmail} for client ${data.name} (${data.email})`);
    return;
  }

  try {
    // 1. Send Notification Email to Admin (Judson)
    await transporter.sendMail({
      from: `"Zeyus Website" <${process.env.SMTP_USER}>`,
      to: notificationEmail,
      subject: `🚀 New Contact Lead: ${data.name} (${data.serviceInterest})`,
      html: notificationHtml,
    });
    console.log(`✅ SMTP: Notification sent to ${notificationEmail}`);

    // 2. Send Auto-Confirmation Email to Client
    const clientAutoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F172A; padding: 24px; text-align: center; color: white;">
          <h2 style="margin: 0; color: #38BDF8;">Zeyus Technologies</h2>
          <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 14px;">Building Digital Success • Empowering Talent</p>
        </div>
        <div style="padding: 28px; color: #1e293b; background-color: #ffffff; line-height: 1.6;">
          <p style="font-size: 18px; font-weight: bold; margin-top: 0; color: #0F172A;">Hello ${data.name},</p>
          <p>Thank you for reaching out to <strong>Zeyus Technologies</strong>!</p>
          <p>We have successfully received your inquiry regarding <strong>${data.serviceInterest}</strong>. Our team is currently reviewing your project details and will get back to you within 24 hours.</p>
          <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #bfdbfe;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;"><strong>Need urgent assistance?</strong><br/>Feel free to call us directly at <a href="tel:+917708796429" style="color: #2563eb;">+91 7708796429</a> or reply directly to this email.</p>
          </div>
          <p style="margin-bottom: 0;">Warm regards,<br/><strong>Judson K</strong><br/><span style="color: #64748b; font-size: 13px;">Founder & CEO, Zeyus Technologies</span></p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Zeyus Technologies" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Thank you for contacting Zeyus Technologies, ${data.name}!`,
      html: clientAutoReplyHtml,
    });
    console.log(`✅ SMTP: Auto-reply sent to ${data.email}`);
  } catch (error: any) {
    console.error('⚠️ SMTP Error Code:', error.code);
    console.error('⚠️ SMTP Error Message:', error.message);
    console.error('⚠️ SMTP Response:', error.response || 'no response');
    console.error('⚠️ SMTP_USER env:', process.env.SMTP_USER ? 'SET' : 'MISSING');
    console.error('⚠️ SMTP_PASS env:', process.env.SMTP_PASS ? 'SET' : 'MISSING');
  }
};

export const sendCourseInquiryNotification = async (data: any) => {
  const transporter = createTransporter();
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'judsonkoilraj573@gmail.com';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #0F172A; padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #7C3AED;">Zeyus Academy</h2>
        <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 14px;">New Course Inquiry</p>
      </div>
      <div style="padding: 24px; color: #1e293b; background-color: #ffffff;">
        <p style="font-size: 16px; margin-top: 0;">You have received a new student course inquiry:</p>
        <p><strong>Student Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #7C3AED;">${data.email}</a></p>
        <p><strong>Course Interest:</strong> ${data.courseInterest}</p>
        <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
        <p><strong>Notes / Message:</strong> ${data.message || 'N/A'}</p>
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('[SMTP MOCK] Course inquiry email mock:');
    console.log(html);
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Zeyus Academy" <${process.env.SMTP_USER}>`,
      to: notificationEmail,
      subject: `🎓 New Course Enrollment Lead: ${data.name} (${data.courseInterest})`,
      html,
    });
    console.log(`✅ SMTP: Course inquiry email sent to ${notificationEmail}`);
  } catch (error) {
    console.error('⚠️ Error sending course inquiry email:', error);
  }
};

