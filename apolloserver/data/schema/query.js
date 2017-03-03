// Defines GraphQL definitions.
const queryDefinitions = `
type RootQuery {
  president(name: String, party: String, term: String): President
  presidents: [President]
  
  user(username: String): User
  users: [User]
  
  service(name: String, provider: String): Service
  services: Service
}`;


module.exports = () => [queryDefinitions];