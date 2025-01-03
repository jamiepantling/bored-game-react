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


const corsOptions = {
  origin: [
    process.env.FRONTEND_URI || 'http://localhost:1234', // Your frontend
    'https://studio.apollographql.com',                 // Apollo Studio
  ],
  credentials: true, // Allow cookies or authorization headers
  exposedHeaders: ['Access-Control-Allow-Private-Network'], // Optional for visibility
};

app.use(cors(corsOptions));

// Add the header explicitly for OPTIONS requests
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  res.sendStatus(204);
});
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

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  console.log(`GraphQL endpoint ready at http://localhost:${PORT}${server.graphqlPath}`);
};

// Start Apollo Server
startApolloServer();