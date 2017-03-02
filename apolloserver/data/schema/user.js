// Defines GraphQL definitions.
const userDefinitions = `
type Extension {
  key: String
  val_int: Int
  val_string: String
  val_list: [Extension]
}
type Meta {
    age: Int
    website: String
}
type User {
  _id: String
  name: String
  username: String!
  password: String!
  admin: Boolean
  location: String
  meta: Meta
  created_at: Int
  updated_at: Int
  extension: [Extension]
}
type Provider {
  name: String
  provider: Int
  cost: Int
}`;

module.exports = () => [userDefinitions]