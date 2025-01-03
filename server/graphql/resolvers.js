const Game = require('../Models/Game');

const resolvers = {
  Query: {
    games: async () => {
      try {
        const games = await Game.find().lean();
        return games.map((game) => ({
          id: game._id.toString(),
          title: game.title,
          genre: game.genre || null,
        }));
      } catch (error) {
        console.error('Error fetching games:', error);
        throw new Error('Failed to fetch games');
      }
    },
  },
};

module.exports = resolvers;
