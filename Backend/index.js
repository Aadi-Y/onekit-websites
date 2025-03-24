require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/_/g, ' '),
    },
    tls: {
        rejectUnauthorized: false,
    },
});

app.post("/send-contact-email", async (req, res) => {
    try {
        const { companyName, name, email, phone, requirements } = req.body;

        if (!companyName || !name || !email || !phone || !requirements) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const mailOptions = {
            from: `${name} <${email}>`, // User's email as sender
            to: process.env.RECEIVER_EMAIL, // Fixed receiver email
            subject: "New Contact Request",
            text: `Company: ${companyName}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequirements: ${requirements}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error); // Print exact error
        res.status(500).json({ error: error.message });
    }
});

app.post("/send-reachUs-email", async (req, res) => {
    try {
        const { name, email, phone, portfolio } = req.body;

        if (!name || !email || !phone || !portfolio) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const mailOptions = {
            from: `${name} <${email}>`, // User's email as sender
            to: process.env.RECEIVER_EMAIL, // Fixed receiver email
            subject: "New Contact Request",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPortfolio: ${portfolio}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error); // Print exact error
        res.status(500).json({ error: error.message });
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP Error:", error);
    } else {
        console.log("Server is ready to send emails.");
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
