"use strict";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import SignInForm from "./form";

interface IProps extends React.Props<Authentication> {
  actions: any;
  authenticated: any;
  authenticateUserMutation: Function;
};
interface IState {
  errors: any;
};

class Authentication extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }
  public handleSubmit(values: any) {
    console.log(values);
    this.props.authenticateUserMutation({ variables: values })
      .then((response: any) => {
        console.log(response);
        //if (response.data.signIn.errors.length <= 0) {
        if (response.data.authenticate_user.token) {
          this.props.actions.signIn(response.data.authenticate_user.token);
          Actions.login_scene();
        } else {
          console.log("Auth failed due to error:" + response.data.authenticate_user.message);
          this.setState({
            errors: [response.data.authenticate_user.message],
          });
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  public render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
      />
    );
  }
};

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(Authentication);
