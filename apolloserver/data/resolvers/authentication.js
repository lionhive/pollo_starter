const {createJwtToken} = require('../../authentication/authentication');
// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    authenticate_user(_, { username, password }, ctx) {
      console.log("authenticating " + username);
      return new Promise((resolve, reject) => {
        // check username and password args
        if (!username || !password) {
          return reject({
            token: 'invalid.input',
            message: 'Missing email/pw',
          });
        }
        const user = new ctx.constructor.User();
        user.find(username).then((user) => {
          // Validate the data
          console.log(user.password + ' : ' + password)
          if (user.password != password) {
            return resolve({
              token: 'invalid.password',
              message: 'Invalid password.',
            });
          }
          if (user.password == password) {
            return resolve({
              token: createJwtToken(username),
              message: 'Success.',
            });
          }
        }).catch((error) => {
          return resolve({
            token: 'invalid.user',
            message: 'Username does nost exist.',
          });
        });
   })},
  }
};

module.exports = resolveFunctions;