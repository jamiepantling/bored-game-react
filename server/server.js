const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');
const Game = require('./Models/Game');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URI,
  })
);
app.use(express.json());

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
};

connectMongo();

app.get('/games', async (req, res) => {
  try {
    const games = await Game.find().lean();
    games.forEach((game) => {
      game._id = game._id.toString();
    });

    games.sort((a, b) => a.title.localeCompare(b.title));

    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
