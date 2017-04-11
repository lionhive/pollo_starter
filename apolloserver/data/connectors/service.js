const db = require('../models/service');

class Service {
  constructor() {
    this.find = ({ name }) => {
      console.log(name);
      return db.findOne({ name });
    };

    this.all = () => {
      const items = db.find({}, (error, data) => {
        return data;
      });
      return items;
    };
    // Mutators.
    this.add = (variables) => {
      const item = new db(Object.assign({}, variables));
      return item.save();
    };
  }
}

module.exports = Service;