// Defines GraphQL definitions.
const typeDefinitions = `
type President {
  name: String
  party: String
  term: String
}
type User {
  name: String
  username: String!
  password: String!
  admin: Boolean
  location: String
  created_at: Int
  updated_at: Int
}
type Schema {
  name: String
  provider: Int
  cost: Int
}

type RootQuery {
  president(name: String, party: String, term: String): President
  presidents: [President]
  user(username: String): User
  schema(name: String, provider: String): Schema
}
type Mutation {
  add_president(name: String, party: String, term: String): President
}
schema {
  query: RootQuery
  mutation: Mutation
}
`;

module.exports = [typeDefinitions];