"use strict";
import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

function mapStateToProps(state: any) {
  return {
    hasErrored: state.auth.tokenHasErrored,
    isLoading: state.auth.tokenIsLoading,
    token: state.auth.token,
  };
};

import { tokenTryLoadFromLocalStorage } from "../../systems/auth/token/action_creators";
function mapDispatchToProps(dispatch: any) {
  let actionCreatorsMap = { tokenTryLoadFromLocalStorage } as ActionCreatorsMapObject;
  return { actions: bindActionCreators(actionCreatorsMap, dispatch) };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
