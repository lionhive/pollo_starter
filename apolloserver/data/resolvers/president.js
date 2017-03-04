// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.find(name);
    },
    presidents(_, {}, ctx) {
      const presidents = new ctx.constructor.President();
      return presidents.all();
    },
  },
  Mutation: {
    add_president(_, { name, party, term }, ctx) {
      const president = new ctx.constructor.President();
      return president.add(name);
    },
  },
};

module.exports = resolveFunctions;