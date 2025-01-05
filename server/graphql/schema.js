const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    id: ID!
    title: String!
    tags: [Tag]
    description: String
    picture: String
  }
  type Tag {
    id: ID!
    content: String!
  }

  type Query {
    games: [Game!]
    tags: [Tag!]
  }
`;

module.exports = typeDefs;
