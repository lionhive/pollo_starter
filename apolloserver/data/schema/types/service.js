// Defines GraphQL definitions.
const Service = `
# A service provider.
type Service {
  _id: String
  name: String
  category: String
  provider: Service
  cost: Int
}
`;
module.exports = () => [Service];
