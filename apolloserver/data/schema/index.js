// Import schema definition
const Schema = require('./schema.js');
 
// Import query
const Query = require('./query.js');
const Mutation = require('./mutation.js');
 
// Import types
const Types = [
require('./types/user.js'),
require('./types/president.js'),
require('./types/service.js'),
]

module.exports = [Schema, Query, Mutation].concat(Types);
