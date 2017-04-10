"use strict";
// Connects Redux actions and GraphQL queries/mutations to the User Component.
// Exports a connector function, use by injecting: Exported(Component).
//
// Note: Coupling the Component's map function directly to the Redux state is bad, solution:
// https://goshakkk.name/redux-antipattern-mapstatetoprops/
//

import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

function mapStateToProps(state: any) {
  return {};
}

//
// Map Apollo GraphQL queries and mutations
// 
import {userQuery} from "./queries.js";

// Import asynchronous email sign in flow. One function only!
import {signOut} from "../../systems/auth/sign_out/action_creators";
function mapDispatchToProps(dispatch: any) {
    let actionCreatorsMap = {signOut} as ActionCreatorsMapObject;
    return {actions: bindActionCreators(actionCreatorsMap, dispatch)};
}

//
// Generate final connected Component by injecting queries nad actions into User.
//
export default compose(
  graphql(userQuery),
  connect(mapStateToProps, mapDispatchToProps),
);
