const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    id: ID!
    title: String!
    genre: String
  }

  type Query {
    games: [Game!]
  }
`;

module.exports = typeDefs;
