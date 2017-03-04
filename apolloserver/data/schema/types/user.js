// Defines GraphQL definitions.
const userDefinitions = `
type Extension {
  key: String
  val_int: Int
  val_string: String
  val_list: [Extension]
}

type Admin {
  is_admin: Boolean
}
type Logging {
  created_at: Int
  updated_at: Int
}
type Meta {
  age: Int
  website: String
}
type Calendar {
  calendar: String
}
type Location {
  location: String
  last_seen: Int
}

type User {
  _id: String
  name: String
  username: String!
  password: String!
  # Extra Data
  admin: Admin
  logging: Logging
  meta: Meta
  calendar: Calendar
  location: Location

  extension: [Extension]
}
`;

module.exports = () => [userDefinitions]