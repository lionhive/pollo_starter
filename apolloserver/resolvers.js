// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.findPresident(name);
    },
  },
};

module.exports = resolveFunctions;