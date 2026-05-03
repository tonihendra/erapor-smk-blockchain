const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simulasi Database
let databaseRapor = [];

app.post('/api/generate-hash', (req, res) => {
    const { nisn, nilai } = req.body;
    // Membuat hash unik sebagai sidik jari digital
    const hash = crypto.createHash('sha256').update(nisn + JSON.stringify(nilai)).digest('hex');
    res.json({ hash });
});

app.listen(5000, () => console.log('Backend jalan di port 5000'));