const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/ai-history', (req, res) => {
  fs.readFile('./data/ai-history.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Veri okunamadı' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});