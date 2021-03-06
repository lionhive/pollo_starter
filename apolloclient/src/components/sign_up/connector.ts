"use strict";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

// State will be available through state.<key_name> (see table below for keys)
// Map redux store state to properties.
function mapStateToProps(state: any) {
  return { signingIn: state.authentication.signingIn };
}

// Import asynchronous email sign in flow. One function only!
import { signUpFlow } from "../../systems/auth/sign_up//action_creators";
function mapDispatchToProps(dispatch: any) {
  let actionCreatorsMap = { signUpFlow } as ActionCreatorsMapObject;
  return { actions: bindActionCreators(actionCreatorsMap, dispatch) };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
