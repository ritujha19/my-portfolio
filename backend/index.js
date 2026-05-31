/* eslint-disable no-undef */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("Resend API Key:", process.env.RESEND_API_KEY);
console.log("Email from .env:", process.env.EMAIL);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("before sendMail");
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL,
      text: `
        New Portfolio Contact Form Submission

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}
        `,
    });
    console.log("After sendMail");
    console.log(result);

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
