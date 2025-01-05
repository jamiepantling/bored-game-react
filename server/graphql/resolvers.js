const Game = require('../Models/Game');
const Tag = require('../Models/Tag');

const resolvers = {
  Query: {
    games: async () => {
      try {
        const games = await Game.find().lean();
        return games.map((game) => ({
          id: game._id.toString(),
          title: game.title,
          picture: game.picture,
        }));
      } catch (error) {
        console.error('Error fetching games:', error);
        throw new Error('Failed to fetch games');
      }
    },
    tags: async () => {
      console.log('tags resolver called');
      try {
        const tags = await Tag.find().lean();
        return tags.map((tag) => ({
          id: tag._id.toString(),
          content: tag.content,
        }));
      } catch (error) {
        console.error('Error fetching tags:', error);
        throw new Error('Failed to fetch tags');
      }
    },
  },
};

module.exports = resolvers;
