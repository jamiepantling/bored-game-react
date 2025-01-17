const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    id: ID!
    title: String
    tags: [Tag]
    description: String
    picture: String
    gameAuthorName: String
  }
  type Tag {
    id: ID!
    content: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    googleId: String!
    collections: [Collection]
  }
  type Collection {
    title: String!
    games: [Game]
  }

  type Query {
    games: [Game!]
    tags: [Tag!]
    users: [User!]
  }
`;

module.exports = typeDefs;
