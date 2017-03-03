const Models = require('../models/president');

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

module.exports = President;