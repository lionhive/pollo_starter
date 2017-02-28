// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.findPresident(name);
    },
    presidents(_, {}, ctx) {
      const presidents = new ctx.constructor.President();
      return presidents.allPresidents();
    }
  },
  Mutation: {
    add_president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.addPresident(name);
    }
  },
};

module.exports = resolveFunctions;