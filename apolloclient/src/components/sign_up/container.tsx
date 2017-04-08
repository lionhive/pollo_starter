"use strict";
import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import Form from "./form";
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
    console.log("sign_up handleSubmit");
  }

  public render() {
    console.log("rendering signUp");
    return (
      <View style={styles.container}>
        <Form
          onSubmit={this.handleSubmit.bind(this)}
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
