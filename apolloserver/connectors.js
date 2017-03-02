const Models = require('./model');

class President {
  constructor() {
    this.findPresident = (name) => {
      const person = Models.President.findOne({ name }, (error, data) => {
        return data;
      });
      return person;
    };
    
    this.allPresidents = () => {
      const all = Models.President.find({}, (error, data) => {
        return data;
      });
      return all;
    };
    
    this.addPresident = (president_name) => {
      const president = new Models.President({name: president_name,
      party: "Yes",
      term: "2017"});
      return president.save((err, item) => {
          console.log('added president:', item);
        });
    };
  }
}

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

module.exports = { President, User };