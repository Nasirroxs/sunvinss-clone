import express from "express";
import transporter from "../config/emailConfig.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { fullname, email, message } = req.body;

  // Email to site owner (you)
  const ownerMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${fullname}`,
    text: `You received a new message:\n\nName: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Professional HTML confirmation email to the sender
  const confirmationMailOptions = {
    from: `"Sunvinss Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank you for contacting Sunvinss!",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
          <div style="background-color: #1a73e8; color: white; padding: 15px 25px; text-align: center;">
            <h2 style="margin: 0;">Sunvinss</h2>
          </div>
          <div style="padding: 25px;">
            <h3 style="color: #1a73e8;">Hi ${fullname},</h3>
            <p>Thank you for reaching out to <strong>Sunvinss</strong>. We've received your message and our team will get back to you shortly.</p>
            
            <div style="background-color: #f1f1f1; border-left: 4px solid #1a73e8; padding: 10px 15px; margin-top: 20px;">
              <p style="margin: 0;"><strong>Your message:</strong></p>
              <p style="margin: 5px 0;">${message}</p>
            </div>

            <p style="margin-top: 25px;">Best regards,<br><strong>Sunvinss Team</strong></p>
          </div>
          <div style="background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #555;">
            <p style="margin: 0;">This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

export default router;
