// Import schema definition
const Schema = require('./schema.js');
 
// Import query
const Query = require('./query.js');
const Mutation = require('./mutation.js');
 
// Import types
const User = require('./user.js');
const President = require('./president.js');
const Service = require('./service.js');
 
module.exports = [Schema, Query, Mutation, User, President, Service];
