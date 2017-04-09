const { createJwtToken, decodeJwtToken } = require('../../authentication/authentication');

// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    user(_, { username, name }, ctx) {
      const user = new ctx.constructor.User();
      return user.find(username, name);
    },
    // Requires token to be set.
    user_authenticated(_, { }, ctx) {
      const user = new ctx.constructor.User();
      console.log(ctx.token);
      if (!ctx.token) {
        console.log("Auth token missing.");
      }
      let decoded = decodeJwtToken(ctx.token);
      console.log(decoded);
      return user.find(decoded.id);
    },
    users(_, { }, ctx) {
      const users = new ctx.constructor.User();
      return users.all();
    },
    user_extension(_, { username, key }, ctx) {
      const user = new ctx.constructor.User();
      return user.extension(username, key);
    },
  },
  Mutation: {
    add_user(_, variables, ctx) {
      return new Promise((resolve, reject) => {
        const db = new ctx.constructor.User();
        db.add(variables).then((user) => {
          return resolve(user);
        }).catch((error) => {
          console.log("fail db.add user: ", error);
          return reject(error);
        });
      })
    },
    add_user_extension(_, { username, key, val_int, val_string }, ctx) {
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