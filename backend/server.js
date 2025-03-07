require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const HYPIXEL_API_KEY = process.env.HYPIXEL_API_KEY;

// Ruta de prueba para comprobar que el servidor responde
//app.get('/', (req, res) => {
//    res.send('Backend funcionando correctamente');
//});

// Ruta para obtener información de un jugador de Hypixel usando su UUID
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

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
