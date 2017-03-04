const db = require('../models/service');

class Service {
  constructor() {
    this.find = (name) => {
      const item = db.find({ name }, (error, data) => {
        return data;
      });
      return item;
    };
    
    this.all = () => {
      const items = db.find({}, (error, data) => {
        return data;
      });
      return items;
    };
    // Mutators.
    this.add = (name, provider, category, cost) => {
      console.log("adding", name, provider);
      const item = new db({name, provider, category, cost});
      return item.save((err, item) => {
          console.log("error: ", err);
          console.log('added ', item);
          return item;
        });
    };
  }
}

module.exports = Service;