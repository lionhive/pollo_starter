"use strict";
import gql from 'graphql-tag'


const userQuery = gql`query UserQuery($name: String!) {
  user(username:$name) {
    name
    username
  }
}`; 

const addUserMutation = gql`mutation AddUserMutation($username: String!, $name: String!, $password: String!) {
  add_user(username:$username, name:$name, password:$password) {
    name
  }
}`; 

export { userQuery, addUserMutation };