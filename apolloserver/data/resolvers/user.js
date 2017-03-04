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