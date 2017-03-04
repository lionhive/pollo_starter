const db = require('../models/president');

class President {
  constructor() {
    this.find = (name) => {
      const person = db.findOne({ name }, (error, data) => {
        return data;
      });
      return person;
    };
    
    this.all = () => {
      const all = db.find({}, (error, data) => {
        return data;
      });
      return all;
    };
    
    this.add = (name, party, term) => {
      const president = new db({name, party, term});
      return president.save((err, item) => {
          console.log('added president:', item);
        });
    };
  }
}

module.exports = President;