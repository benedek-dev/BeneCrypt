require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const HYPIXEL_API_KEY = process.env.HYPIXEL_API_KEY;

app.get("/player/:uuid", async (req, res) => {
    try {
        const { uuid } = req.params;
        const response = await axios.get(`https://api.hypixel.net/player`, {
            params: { key: HYPIXEL_API_KEY, uuid }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(3001, () => console.log("Backend running on port 3001"));
