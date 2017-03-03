const Models = require('../models/user');

class User {
  constructor() {
    // Queries
    this.allUsers = () => {
      const all = Models.User.find({}, (error, data) => {
        return data;
      });
      return all;
    };
    // Mutators
    this.addUser = (username, name, password) => {
      const user = new Models.User({username: username,
        name: name,
        password: password});
      return user.save((err, item) => {
          console.log('added user:', item, err);
        });
    };
    this.addExtension = (username, extension) => {
      const user = Models.User.update({ username }, { $push:
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