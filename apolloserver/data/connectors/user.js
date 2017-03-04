const db = require('../models/user');

class User {
  constructor() {
    // Queries
    this.all = () => {
      const result = db.find({}, (error, data) => {
        return data;
      });
      return result;
    };
    this.find = (username, name) => {
      const result = db.findOne({ username }, (error, data) => {
        return data;
      });
      return result;
    };
    this.extension = (username, key) => {
      const user = db.find({username}, (error, data) => {
        return data;
      });
      extension = user.find({ extension: { key }}, (error, data) => {
        return data;
      });
      return extension;
    };    
    // Mutators
    this.add = (username, name, password) => {
      const user = new db({username: username,
        name: name,
        password: password});
      return user.save((err, item) => {
          console.log('added user:', item, err);
        });
    };
    this.addExtension = (username, extension) => {
      const user = db.update({ username }, { $push:
          { extension: 
            { key: extension.key,
              val_int: extension.val_int,
              val_string: extension.val_string }}},
          (error, data) => {
            console.log('updated extension:', data, error);
            return data;
          });
    };
  }
}

module.exports = User;