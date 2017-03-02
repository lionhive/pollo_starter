const { merge } = require('lodash');

const User = require('./user.js');
const President = require('./president.js');
 
module.exports = () => [User, President];
//module.exports = [merge(User)];
