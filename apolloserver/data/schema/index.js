// Import schema definition
const Schema = require('./schema.js');
 
// Import query
const Query = require('./query.js');
const Mutation = require('./mutation.js');
 
// Import types
const User = require('./types/user.js');
const President = require('./types/president.js');
const Service = require('./types/service.js');
 
module.exports = [Schema, Query, Mutation, User, President, Service];
