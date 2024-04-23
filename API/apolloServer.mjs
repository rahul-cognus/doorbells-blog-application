import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./apollo/schema.js";
import resolvers from "./apollo/resolvers.js";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const typeDefs = require("./apollo/schema.js");
// const resolvers = require("./apollo/resolvers.js");
// const graphqlUploadExpress = require("graphql-upload");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();
app.use(graphqlUploadExpress());
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();
export default app;
