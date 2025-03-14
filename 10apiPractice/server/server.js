require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.get("/" , (req , res) => {
    res.send("Server is runnning ...");
});

app.post("/api/gemini", async (req, res) => {
    try {
        const { question } = req.body;
        const apiKey = process.env.GEMINI_API_KEY; // Get API key from .env
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const response = await axios.post(
            url,
            { contents: [{ parts: [{ text: question }] }] },
            { headers: { "Content-Type": "application/json" } }
        );
        res.json(response.data);
    } catch (error) {
        console.error("Gemini API Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
