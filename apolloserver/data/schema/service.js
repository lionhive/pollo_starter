// Defines GraphQL definitions.
const Service = `
# A service provider.
type Service {
  name: String
  provider: Int
  cost: Int
}
`;
module.exports = () => [Service];
