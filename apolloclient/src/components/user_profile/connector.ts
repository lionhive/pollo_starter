"use strict";
// Connects Redux actions and GraphQL queries/mutations to the User Component.
// Exports a connector function, use by injecting: Exported(Component).
//
// Note: Coupling the Component's map function directly to the Redux state is bad, solution:
// https://goshakkk.name/redux-antipattern-mapstatetoprops/
//

import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";

//
// Map Apollo GraphQL queries and mutations
//
import {userQuery} from "./queries.js";

//
// Generate final connected Component by injecting queries nad actions into User.
//
export default compose(
  graphql(userQuery),
);
