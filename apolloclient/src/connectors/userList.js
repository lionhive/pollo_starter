"use strict";
import { graphql, compose } from 'react-apollo';

//
// Map Apollo GraphQL queries and mutations
//
import {userListQuery} from '../queries/userList.js';

export default compose(
  graphql(userListQuery));
