"use strict";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

// State will be available through state.<key_name> (see table below for keys)
// Map redux store state to properties.
function mapStateToProps(state: any) {
  return { signingIn: state.authentication.signingIn };
}

export default compose(
  connect(mapStateToProps),
);
