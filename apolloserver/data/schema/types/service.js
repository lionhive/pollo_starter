// Defines GraphQL definitions.
const Service = `
# A service provider.
type Service {
  name: String
  category: String
  provider: Service
  cost: Int
}
`;
module.exports = () => [Service];
