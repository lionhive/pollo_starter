// Defines MongoDB models.
const Mongoose = require('mongoose');

const ServiceSchema = Mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: String,
  provider: this,
  cost: Number,
});
const Service = Mongoose.model('Service', ServiceSchema);

module.exports = Service;
