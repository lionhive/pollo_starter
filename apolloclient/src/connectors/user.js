"use strict";
// Connects Redux actions and GraphQL queries/mutations to the User Component.
// Exports a connector function, use by injecting: Exported(Component).
//
// Note: Coupling the Component's map function directly to the Redux state is bad, solution:
// https://goshakkk.name/redux-antipattern-mapstatetoprops/
//

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

//
// Map Redux action functions.
//

// Map redux store state to properties.
// state.<reducername> is the reducers/<file.js> name.
function mapStateToProps(state) {
  return { 
    users: state.users,
   };
}
import { ActionCreators } from '../actions';
// Note: It is possible to bind ActionCreators to other functions
// besides Props. See http://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
function mapDispatchToProps(dispatch) {
    // 'actions:' organizes callbacks into props.actions.<function_name>.
    return {actions: bindActionCreators(ActionCreators, dispatch)};
}

//
// Map Apollo GraphQL queries and mutations
//
import {userQuery, addUserMutation} from '../queries/user.js';
const userQueryOptions = {
      options: { variables: { name: "tvykruta" } }};
const addUserMutationOptions = { name: "addUser" };

//
// Generate final connected Component by injecting queries nad actions into User.
//
export default compose(
  graphql(userQuery, userQueryOptions),
  graphql(addUserMutation, addUserMutationOptions),
  connect(mapStateToProps, mapDispatchToProps),
);
