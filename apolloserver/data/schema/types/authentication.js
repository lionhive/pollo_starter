// Defines GraphQL definitions.
const definitions = `
type Authentication {
  token: String
  message: String
}
`;

module.exports = () => [definitions]