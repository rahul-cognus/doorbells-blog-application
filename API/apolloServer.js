const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./apollo/schema.js");
const resolvers = require("./apollo/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

module.exports = app;
