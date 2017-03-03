// Defines MongoDB models.
const Mongoose = require('mongoose');

var Extension = Mongoose.Schema({
  key: String,
  val_int: Number,
  val_string: String,
  val_list: [this],
});

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
  updated_at: Date,
  extension: [Extension],
});
const User = Mongoose.model('User', UserSchema);

module.exports = {User};
