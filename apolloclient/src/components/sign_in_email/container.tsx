"use strict";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import SignInForm from "../sign_in_email/form";

interface IProps extends React.Props<SignInEmail> {
  actions: any;
  rootNavigation: any;
  signingIn: boolean;
};
interface IState {
  errors: any;
};

class SignInEmail extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }

  // values contains 'name' and 'password' from a redux-form.
  public handleSubmit(values: any) {
    this.props.actions.signInEmail(values)
      .then((result: any) => {
        if (result.token) {
          this.props.rootNavigation.navigate("UserProfile");
        } else {
          this.setState({
            errors: [result.message],
          });
        }
      })
      .catch((error: any) => {
        this.setState({
          errors: [error],
        });
      });
  }

  public render() {
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
export default Connector(SignInEmail);
