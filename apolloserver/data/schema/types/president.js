// Defines GraphQL definitions.
const presidentDefinitions = `
type President {
  name: String
  party: String
  term: String
}`;

module.exports = () => [presidentDefinitions];