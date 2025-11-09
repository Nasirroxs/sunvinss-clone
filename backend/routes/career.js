import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import transporter from "../config/emailConfig.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// =====================================
// 📁 Multer Configuration for File Uploads
// =====================================
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// =====================================
// 📧 Career Form Route
// =====================================
router.post("/", upload.single("resume"), async (req, res) => {
  const { fullname, email, phone, position } = req.body;
  const file = req.file;

  if (!fullname || !email || !position) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  // ✅ HR / Admin Email (goes to CAREER_EMAIL)
  const hrMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CAREER_EMAIL,
    subject: `📥 New Job Application - ${fullname} (${position})`,
    text: `
New career application received:

Name: ${fullname}
Email: ${email}
Phone: ${phone || "N/A"}
Position: ${position}

Resume: ${file ? file.originalname : "No file attached"}
    `,
    attachments: file
      ? [
          {
            filename: file.originalname,
            path: file.path,
          },
        ]
      : [],
  };

  // ✅ Confirmation Email to Applicant
  const applicantMailOptions = {
    from: `"Eaver HR" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank you for applying at Eaver Global Solutions!",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
          <div style="background: linear-gradient(90deg, #528dff, #c94cff, #f062c0); color: white; padding: 15px 25px; text-align: center;">
            <h2 style="margin: 0;">Eaver Global Solutions Pvt Ltd</h2>
          </div>
          <div style="padding: 25px;">
            <h3>Hi ${fullname},</h3>
            <p>Thank you for applying for the <strong>${position}</strong> role at <strong>Eaver Energy</strong>.</p>
            <p>Our HR team has received your application and will review it shortly. If your profile matches our requirements, we’ll reach out to you for the next steps.</p>
            
            <p style="margin-top: 25px;">Best regards,<br><strong>Eaver HR Team</strong></p>
          </div>
          <div style="background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #555;">
            <p style="margin: 0;">This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // ✅ Send both emails
    await transporter.sendMail(hrMailOptions);
    await transporter.sendMail(applicantMailOptions);

    // ✅ Delete uploaded resume after sending
    if (file && fs.existsSync(file.path)) {
      fs.unlink(file.path, (err) => {
        if (err) console.error("❌ Error deleting uploaded resume:", err);
        else console.log("🧹 Deleted uploaded resume:", file.path);
      });
    }

    console.log("📧 Career email sent successfully!");
    res.status(200).json({ success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending career email:", error);

    // Attempt to delete file even if error
    if (file && fs.existsSync(file.path)) fs.unlinkSync(file.path);

    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

export default router;
