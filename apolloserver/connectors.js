const Models = require('./model');

class President {
  constructor() {
    this.findPresident = (name) => {
      const person = Models.President.findOne({ name }, (error, data) => {
        return data;
      });
      return person;
    };
  }
}

module.exports = { President };