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
const Resolvers = require('./data/resolvers');
const Connectors = require('./data/connectors');

const logger = { log: (e) => console.log(e) }
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  logger,
});

// Set up authentication with passportJs and add to app routing.
const Utils = require('./utils/utils');
var Authentication = require('./authentication/authentication');
Authentication.setup(app, Utils.findUser);

app.use('/graphql', bodyParser.json(), apolloExpress((request) => ({
  schema: executableSchema,
  context: {
    constructor: Connectors,
    // Optionally pass token into context of Connectors.
    token: Authentication.getTokenFromRequest(request),
  },
})));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));