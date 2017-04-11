const db = require('../models/president');

class President {
  constructor() {
    this.find = (variables) => {
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

    this.add = (variables) => {
      const president = new db(Object.assign({}, variables));
      return president.save((err, item) => {
        console.log('added president:', item);
      });
    };
  }
}

module.exports = President;