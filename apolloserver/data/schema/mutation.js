// Defines GraphQL definitions.
const mutationDefinitions = `
type Mutation {
  add_president(name: String, party: String, term: String): President

  add_user(username: String, name: String, password: String): User
  add_user_extension(username: String, key: String, val_int: Int, val_string: String): User
  
  add_service(name: String, provider: Int, category: String, cost: Int): Service
}`;

module.exports = () => [mutationDefinitions];