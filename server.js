const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=demo&units=metric`);
    res.json({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity
    });
  } catch (error) {
    res.status(404).json({ error: 'City not found or API error' });
  }
});

app.listen(PORT, () => {
  console.log(`Weather app running on http://localhost:${PORT}`);
});