"use strict";
import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

import { actionLoadLocalAuthToken } from "../../systems/auth/token/action_creators";
// expose props.actions.<func_name> (see actionCreators)
function mapDispatchToProps(dispatch: any) {
  let actionCreatorsMap = { actionLoadLocalAuthToken } as ActionCreatorsMapObject;
  return { actions: bindActionCreators(actionCreatorsMap, dispatch) };
}

function mapStateToProps(state: any) {
  console.log(state);

  return {
    token: state.auth.token,
    hasErrored: state.auth.tokenHasErrored,
    isLoading: state.auth.tokenIsLoading,
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
