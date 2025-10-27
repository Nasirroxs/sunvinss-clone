import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config(); // 👈 Add this line

console.log("🔍 DEBUG Gmail credentials:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
  PASS_LENGTH: process.env.EMAIL_PASS?.length,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;
