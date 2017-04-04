"use strict";
import gql from "graphql-tag";

const userQuery = gql`query UserAuthenticated {
  user_authenticated {
    _id
    name
    username
    password
  }
}`;

export { userQuery };
