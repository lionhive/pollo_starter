"use strict";
import { compose, graphql } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

// State will be available through state.<key_name> (see table below for keys)
// Map redux store state to properties.
function mapStateToProps(state: any) {
  return { signingIn: state.authentication.signingIn };
}

import * as actionCreators from "./actions";
// expose props.actions.<func_name> (see actionCreators)
function mapDispatchToProps(dispatch: any) {
    let actionCreatorsMap = {...actionCreators} as ActionCreatorsMapObject;
    return {actions: bindActionCreators(actionCreatorsMap, dispatch)};
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
