// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    president(_, { variables }, ctx) {
      const president = new ctx.constructor.President();
      return president.find(variables);
    },
    presidents(_, { }, ctx) {
      const presidents = new ctx.constructor.President();
      return presidents.all();
    },
  },
  Mutation: {
    add_president(_, { variables }, ctx) {
      const president = new ctx.constructor.President();
      return president.add(variables);
    },
  },
};

module.exports = resolveFunctions;