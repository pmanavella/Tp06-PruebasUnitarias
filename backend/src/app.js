const express = require('express');
const { validatePlantName } = require('./plantValidation');

const app = express();

app.use(express.json());

app.get('/api/plants', (req, res) => {
  res.json([
    { id: 1, name: 'Aloe Vera' },
    { id: 2, name: 'Lavanda' }
  ]);
});

app.post('/api/plants', (req, res) => {
  const { name } = req.body;
  const result = validatePlantName(name);

  if (!result.ok) {
    return res.status(400).json({ message: result.message });
  }

  const plant = { id: 3, name: result.value };
  res.status(201).json(plant);
});

module.exports = app;
