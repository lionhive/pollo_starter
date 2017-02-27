/*
// Defines MongoDB models.
const Mongoose = require('mongoose');

const PresidentSchema = Mongoose.Schema({
  name: String,
  party: String,
  term: String,
});
const President = Mongoose.model('President', PresidentSchema);

const UserSchema = Mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});
const User = Mongoose.model('User', UserSchema);

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

module.exports = {President, User, Service, Review};
*/
const Mongoose = require('mongoose');

const PresidentSchema = Mongoose.Schema({
  name: String,
  party: String,
  term: String,
});

const President = Mongoose.model('President', PresidentSchema);

module.exports = President;