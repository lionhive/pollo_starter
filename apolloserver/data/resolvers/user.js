const {createJwtToken} = require('../../authentication/authentication');
// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    user(_, { username, name }, ctx) {
      const user = new ctx.constructor.User();
      return user.find(username, name);
    },
    users(_, {}, ctx) {
      const users = new ctx.constructor.User();
      return users.all();
    },
    user_extension(_, { username, key }, ctx) {
      const user = new ctx.constructor.User();
      return user.extension(username, key);
    },
    user_authenticate(_, { username, password }, ctx) {
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
  },
  Mutation: {
    add_user(_, { username, name, password, extension }, ctx) {
      const user = new ctx.constructor.User();
      return user.add(username, name, password, extension);
    },
    add_user_extension(_, {username, key, val_int, val_string }, ctx) {
      const user = new ctx.constructor.User();
      extension = {};
      extension.key = key;
      extension.val_int = val_int;
      extension.val_string = val_string;
      user.extension = extension;
      return user.addExtension(username, extension);
    },
  },
};

module.exports = resolveFunctions;