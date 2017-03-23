"use strict";
import gql from "graphql-tag"

const userListQuery = gql`query UserListQuery {
  users {
    _id
    name
    username
  }
}`;

export { userListQuery };