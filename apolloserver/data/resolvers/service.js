// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    service(_, { name }, ctx) {
      const item = new ctx.constructor.Service();
      return item.find(name);
    },
    services(_, {}, ctx) {
      const item = new ctx.constructor.Service();
      return item.all();
    },
  },
  Mutation: {
    add_service(_, { name, category, provider, cost }, ctx) {
      const item = new ctx.constructor.Service();
      return item.add(name, category, provider, cost);
    },
  },
};

module.exports = resolveFunctions;