const {createJwtToken} = require('../../authentication/authentication');
// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  Mutation: {
    authenticate_user(_, { username, password }, ctx) {
      console.log("authenticating " + username);
      return new Promise((resolve, reject) => {
        // check username and password args
        if (!username || !password) {
          return reject({
            message: "Missing email or password.",
            code: 'invalid.input',
          });
        }
        const user = new ctx.constructor.User();
        user.find(username).then((user) => {
          // Validate the data
          console.log('comparing password ' + user.password + '/' + password)
          if (user.password != password) {
            return resolve({
              message: "Incorrect password.",
              code: 'invalid.password',
            });
          }
          if (user.password == password) {
            return resolve({
              code: "valid.token",
              message: "Success.",
              token: createJwtToken(username),
            });
          }
        }).catch((error) => {
          return resolve({
            message: "User does not exist.",
            code: 'invalid.user',
          });
        });
   })},
  }
};

module.exports = resolveFunctions;