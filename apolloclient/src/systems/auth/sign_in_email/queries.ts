"use strict";
import gql from "graphql-tag";

const authenticateUserMutation = gql`
  mutation authenticate_user($username: String!, $password: String!) {
  authenticate_user(username:$username, password:$password) {
    token
    code
    message
  }
}`;

export { authenticateUserMutation };
