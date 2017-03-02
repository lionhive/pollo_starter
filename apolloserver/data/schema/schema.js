// Defines GraphQL definitions.
const Schema = `
schema {
  query: RootQuery
  mutation: Mutation
}
`;

module.exports = () => [Schema];