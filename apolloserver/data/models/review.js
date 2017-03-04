// Defines MongoDB models.
const Mongoose = require('mongoose');

const ReviewSchema = Mongoose.Schema({
  author: Number,
  date: Date,
  stars: Number,

  text: String,
});
const Review = Mongoose.model('Review', ReviewSchema);

module.exports = Review;
