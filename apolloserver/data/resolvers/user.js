const { createJwtToken, decodeJwtToken } = require('../../authentication/authentication');

// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    user(_, variables, ctx) {
      const user = new ctx.constructor.User();
      return user.find(variables);
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
    user_extension(_, variables, ctx) {
      const user = new ctx.constructor.User();
      return user.extension(variables);
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
    add_user_extension(_, variables, ctx) {
      const user = new ctx.constructor.User();
      extension = {};
      Object.assign(extension, variables)
      user.extension = extension;
      return user.addExtension(variables.username, extension);
    },
  },
};

module.exports = resolveFunctions;