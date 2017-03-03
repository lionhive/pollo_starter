const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const PORT = 8080;
const app = express();
const { apolloExpress, graphiqlExpress } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/apollo', (err) => {
  if (err) {
    return err;
  }
  return true;
});

//const seed = require('./seed');
//seed();
// see https://github.com/tadejstanic/graphql-api-example

const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers/user.js');
const Connectors = require('./data/connectors');

const logger = { log: (e) => console.log(e) }
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  logger,
});

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {
    constructor: Connectors,
  },
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));