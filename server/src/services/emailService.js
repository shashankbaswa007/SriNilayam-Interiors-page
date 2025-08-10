import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'SriNilayam.Interiors@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password', // Use app password for Gmail
    },
  });
};

// Send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const { name, email, phone, projectType, budget, message } = contactData;
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'SriNilayam.Interiors@gmail.com',
      to: 'SriNilayam.Interiors@gmail.com',
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the SriNilayam Interiors website contact form.
            </p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to customer
    const confirmationOptions = {
      from: process.env.EMAIL_USER || 'SriNilayam.Interiors@gmail.com',
      to: email,
      subject: 'Thank you for contacting SriNilayam Interiors',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Thank You for Your Interest!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to SriNilayam Interiors. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your requirements</li>
              <li>We'll contact you to schedule a consultation</li>
              <li>We'll discuss your project in detail</li>
              <li>We'll provide you with a customized proposal</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to explore our portfolio and services on our website.</p>
          
          <p>Best regards,<br>
          <strong>SriNilayam Interiors Team</strong><br>
          Phone: +91 7981841442<br>
          Email: SriNilayam.Interiors@gmail.com</p>
        </div>
      `,
    };
    
    await transporter.sendMail(confirmationOptions);
    
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

// Send consultation booking email
export const sendConsultationEmail = async (consultationData) => {
  try {
    const transporter = createTransporter();
    
    const {
      name, email, phone, projectType, propertyType, rooms, budget, timeline,
      consultationType, preferredDate, preferredTime, address, additionalNotes
    } = consultationData;
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'SriNilayam.Interiors@gmail.com',
      to: 'SriNilayam.Interiors@gmail.com',
      subject: `New Consultation Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Consultation Booking
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
            <p><strong>Rooms to Design:</strong> ${rooms.join(', ')}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Consultation Details</h3>
            <p><strong>Consultation Type:</strong> ${consultationType === 'virtual' ? 'Virtual Consultation' : 'Site Visit'}</p>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            ${consultationType === 'site-visit' ? `<p><strong>Address:</strong> ${address}</p>` : ''}
          </div>
          
          ${additionalNotes ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Additional Notes</h3>
            <p style="line-height: 1.6;">${additionalNotes}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              Please contact the client to confirm the consultation appointment.
            </p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to customer
    const confirmationOptions = {
      from: process.env.EMAIL_USER || 'SriNilayam.Interiors@gmail.com',
      to: email,
      subject: 'Consultation Booking Confirmation - SriNilayam Interiors',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Consultation Booked Successfully!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for booking a consultation with SriNilayam Interiors. We're excited to help you transform your space!</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Consultation Details</h3>
            <p><strong>Type:</strong> ${consultationType === 'virtual' ? 'Virtual Consultation' : 'Site Visit'}</p>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What Happens Next?</h3>
            <ul style="line-height: 1.8;">
              <li>We'll contact you within 24 hours to confirm your appointment</li>
              <li>Our designer will prepare for your consultation</li>
              <li>We'll discuss your vision and requirements in detail</li>
              <li>You'll receive a customized proposal within 48 hours</li>
            </ul>
          </div>
          
          <p>If you need to reschedule or have any questions, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>
          <strong>SriNilayam Interiors Team</strong><br>
          Phone: +91 7981841442<br>
          Email: SriNilayam.Interiors@gmail.com</p>
        </div>
      `,
    };
    
    await transporter.sendMail(confirmationOptions);
    
    return { success: true };
  } catch (error) {
    console.error('Consultation email sending error:', error);
    return { success: false, error: error.message };
  }
};