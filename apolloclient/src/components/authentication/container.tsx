"use strict";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import SignInForm from "./form";

interface IProps extends React.Props<Authentication> {
  actions: any;
  authenticateUserMutation: Function;
  signingIn: boolean,
};
interface IState {
  errors: any,
};

class Authentication extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }

  public handleSubmit(values: any) {
    this.props.actions.signInFlow(values)
      .then((result: any) => {
        if (result.token) {
          console.log("Log in complete");
          console.log(result);
          Actions.login_scene();
        } else {
          this.setState({
            errors: [result.message],
          });
        }
      }).catch((error: any) => {
        console.log(error)
        this.setState({
          errors: [error],
        });
      });
  }

  public render() {
    console.log("printing container props");
    console.log(this.props);
    return (
      <SignInForm
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
        signingIn={this.props.signingIn}
      />
    );
  }
};

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(Authentication);
