const { merge } = require('lodash');

const Authenticate = require('./authentication.js');
const President = require('./president.js');
const Service = require('./service.js');
const User = require('./user.js');
 
module.exports = merge(Authenticate, President, Service, User);
