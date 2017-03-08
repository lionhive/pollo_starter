// Defines GraphQL definitions.
const presidentDefinitions = `
type President {
  _id: String
  name: String
  party: String
  term: String
}`;

module.exports = () => [presidentDefinitions];