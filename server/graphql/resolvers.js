const Game = require('../Models/Game');
const Tag = require('../Models/Tag');
const User = require('../Models/User');

const resolvers = {
  Query: {
    games: async () => {
      try {
        const games = await Game.find().lean();
        return games.map((game) => ({
          id: game._id.toString(),
          title: game.title,
          picture: game.picture,
          description: game.description,
          gameAuthorName: game.gameAuthorName,
        }));
      } catch (error) {
        console.error('Error fetching games:', error);
        throw new Error('Failed to fetch games');
      }
    },
    tags: async () => {
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
    users: async () => {
      try {
        const users = await User.find()
          .populate('collections.games')
          .lean();
        return users.map((user) => ({
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          googleId: user.googleId,
          collections: user.collections?.map((collection) => ({
            title: collection.title,
            games: collection.games.map((game) => ({
              title: game.title,
            })),
          })),
        }));
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    },
  },
};

module.exports = resolvers;
