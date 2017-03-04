// Defines GraphQL definitions.
const queryDefinitions = `
type RootQuery {
  president(name: String, party: String, term: String): President
  presidents: [President]
  
  user(username: String, name: String): User
  users: [User]
  user_extension(username: String, key: String): Extension

  service(name: String): Service
  services: [Service]
}`;


module.exports = () => [queryDefinitions];