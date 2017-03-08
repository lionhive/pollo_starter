import gql from 'graphql-tag'

const userQuery = gql`query UserQuery($name: String!){
  user(username:$name)
  {
    name
    username
  }
}`; 

export default userQuery;