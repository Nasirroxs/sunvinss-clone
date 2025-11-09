import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const router = express.Router();

// ✅ Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    console.log("🤖 Eaver AI (Gemini) received message:", message);

    // ✅ Use Gemini 2.5 model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are Eaver AI Assistant — a friendly and professional customer support bot.
You help users learn about Eaver Global Solutions services, products, and company information.
Respond clearly, helpfully, and conversationally.

User: ${message}
`;

    const result = await model.generateContent(prompt);
    const aiReply = result.response.text();

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("🧠 Gemini API Error:", error.message || error);
    res.status(500).json({
      reply: "Sorry, I’m having trouble responding right now.",
      error: error.message,
    });
  }
});

export default router;
