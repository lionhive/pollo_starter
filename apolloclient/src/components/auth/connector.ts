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
  console.log(state);

  return {
    auth_token: state.auth.auth_token,
    hasErrored: state.auth.tokenHasErrored,
    isLoading: state.auth.tokenIsLoading,
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
