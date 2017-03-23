// Defines MongoDB models.
const Mongoose = require('mongoose');

const ServiceSchema = Mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: string,
  provider: this,
  cost: number,
});
const Service = Mongoose.model('Service', ServiceSchema);

module.exports = Service;
