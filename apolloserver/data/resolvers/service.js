// Defines access functions for GraphQL schemas.
const resolveFunctions = {
  RootQuery: {
    // Users
    service(_, variables, ctx) {
      const item = new ctx.constructor.Service();
      return item.find(variables)
        .then((item) => {
          if (!item) throw("Service not found");
          return item;})
        .catch((error) => Promise.reject(error));
    },
    services(_, { }, ctx) {
      const item = new ctx.constructor.Service();
      return item.all();
    },
  },
  Mutation: {
    add_service(_, variables, ctx) {
      return new Promise((resolve, reject) => {
        const db = new ctx.constructor.Service();
        db.add(variables).then((item) => {
          return resolve(item);
        }).catch((error) => {
          console.log("fail db.add: ", error);
          return reject(error);
        });
      })
    },
  },
};

module.exports = resolveFunctions;