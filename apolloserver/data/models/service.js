// Defines MongoDB models.
const Mongoose = require('mongoose');

const ServiceSchema = Mongoose.Schema({
  name: String,
  provider: Number,
  cost: Number,
});
const Service = Mongoose.model('Service', ServiceSchema);

const ReviewSchema = Mongoose.Schema({
  author: Number,
  date: Date,
  stars: Number,

  text: String,
});
const Review = Mongoose.model('Review', ReviewSchema);

module.exports = {Service, Review};
