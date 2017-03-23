// Defines MongoDB models.
const Mongoose = require('mongoose');

const PresidentSchema = Mongoose.Schema({
  name: string,
  party: string,
  term: string,
});
const President = Mongoose.model('President', PresidentSchema);

module.exports = President;
