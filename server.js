import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;

// Endpoint for frontend to call
app.get('/api/gemini', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY; // Load API key from .env file

  try {
    // Make request to the Gemini API using axios
    const response = await axios.get('https://api.gemini.com/v1/marketdata', {
      headers: {
        'Authorization': `Bearer ${apiKey}`, // Add the API key to the request header
      },
    });
    res.json(response.data); // Send response data back to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Gemini API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
