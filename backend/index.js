/* eslint-disable no-undef */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("Received contact form data:", { name, email, subject, message });
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL,

  subject: `Portfolio Contact: ${subject}`,
      text: `
        New Portfolio Contact Form Submission

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        `,
    });
    console.log("RESEND RESULT:", result);

    // ❗ IMPORTANT CHECK
    if (result.error) {
      return res.status(400).json({
        success: false,
        message: result.error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
