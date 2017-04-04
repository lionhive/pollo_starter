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

//
// Map Redux action functions.
//

// Map redux store state to properties.
// Access through props.data.<name>
function mapStateToProps(state: any) {
  return {
    users: state.users,
  };
}

// Note: It is possible to bind ActionCreators to other functions
// besides Props. See http://stackoverflow.com/questions/34458261/
// how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
import * as actionCreators from "./actions";
function mapDispatchToProps(dispatch: any) {
  let actionCreatorsMap = { ...actionCreators } as ActionCreatorsMapObject;
  // 'actions:' organizes callbacks into props.actions.<function_name>.
  return { actions: bindActionCreators(actionCreatorsMap, dispatch) };
}

//
// Map Apollo GraphQL queries and mutations
//
import { addUserMutation, userQuery } from "./queries.js";
const userQueryOptions = {
  options: { variables: { name: "tvykruta" } }
};
// Without this option, the function will be called this.props.mutate().
const addUserMutationOptions = { name: "addUserMutation" };

//
// Generate final connected Component by injecting queries nad actions into User.
//
export default compose(
  graphql(userQuery, userQueryOptions),
  graphql(addUserMutation, addUserMutationOptions),
  connect(mapStateToProps, mapDispatchToProps),
);
