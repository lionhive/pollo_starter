"use strict";
import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

// import Form from "./form";
let Form = require("./form-clean.js").default;
// import Form from "./form-clean";
import styles from "./styles";

interface IProps extends React.Props<SignUp> {
  actions: any;
  signingIn: boolean;
};
interface IState {
  errors: any;
};

class SignUp extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errors: [] };
  }

  // values contains 'name' and 'password' from a redux-form.
  public handleSubmit(values: any) {
    console.log("container.tsx28: hsandleSubmit called");
    console.log(values);
    this.props.actions.signUpFlow(values).then((result: any) => {
      console.log("**** sign up succeeded, result: ***");
      console.log(result);
      if (result.data && result.data.authenticate_user.token) {
        Actions.profile_scene();
      } else {
        console.log("This error should never tirgger!");
        this.setState({
          errors: [result.message],
        });
      }
    }).catch((error: any) => {
      console.log("caught error: " + error);
      console.log(error);
      this.setState({
        errors: [error.message],
      });
    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <Form
          onSubmit={this.handleSubmit.bind(this)}
          submitting={this.props.signingIn}
          errors={this.state.errors}
          signingIn={this.props.signingIn}
        />
      </View>
    );
  }
};

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(SignUp);
