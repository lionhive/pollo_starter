"use strict";
import gql from "graphql-tag";

// Adds user and authenticates JWT key.
const addUserAndAuthenticateMutation = gql`
  mutation AddUserMutation($username: String!, $name: String!, $password: String!) {
    add_user(username:$username, name:$name, password:$password) {
      name
    }
    authenticate_user(username:$username, password:$password) {
      token
      code
      message
    }
  }`;

export { addUserAndAuthenticateMutation };
