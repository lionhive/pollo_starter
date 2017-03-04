const { merge } = require('lodash');

const President = require('./president.js');
const Service = require('./service.js');
const User = require('./user.js');
 
module.exports = merge(President, Service, User);
