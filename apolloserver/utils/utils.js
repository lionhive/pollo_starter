const db = require('../data/models/user');

// Finds user by name from user database.
// Returns NULL if no user matched.
function findUser(username) {
  return new Promise((resolve, reject) => {
    const result = db.findOne({ username }, (error, data) => {
      if (error) {
        console.log("error:" + error);
        reject(err);
      } else if (data) {
        console.log("found: " + data);
        resolve(data);
      }
      resolve(null);
    });
  });
};

module.exports = {findUser};