"use strict";
import { compose, graphql } from "react-apollo";

//
// Map Apollo GraphQL queries and mutations
//
import {userListQuery} from "./queries";

export default compose(
  graphql(userListQuery));
