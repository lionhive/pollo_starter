// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    user(_, { name }, ctx) {
      const user = new ctx.constructor.User();
      return user.findUser(name);
    },
    users(_, {}, ctx) {
      const users = new ctx.constructor.User();
      return users.allUsers();
    },
  },
  Mutation: {
    add_user(_, { username, name, password, extension }, ctx) {
      const user = new ctx.constructor.User();
      return user.addUser(username, name, password, extension);
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