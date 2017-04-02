// Defines GraphQL definitions.
// Note: Ths is not stored in the database, only used as communication.
// Should we put this in different folder and reserves types for persistent schemas?
const Authentication = `
  type Auth {
    token: String
    code: String
    message: String
  }
`;

module.exports = () => [Authentication]