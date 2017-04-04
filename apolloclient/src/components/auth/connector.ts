"use strict";
import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

import * as actionCreators from "./actions";
// expose props.actions.<func_name> (see actionCreators)
function mapDispatchToProps(dispatch: any) {
  let actionCreatorsMap = { ...actionCreators } as ActionCreatorsMapObject;
  return { actions: bindActionCreators(actionCreatorsMap, dispatch) };
}

function mapStateToProps(state: any) {
  return {
    authenticated: state.app.authenticated,
    auth_token: state.app.auth_token,
    hasErrored: state.app.tokenHasErrored,
    isLoading: state.app.tokenIsLoading,
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
