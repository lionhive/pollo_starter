"use strict";
// Tries to restore auth token from local storage and log user in.
// If no auth token, navigate to LOGIN page.
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

interface IProps {
  actions?: any;
  rootNavigation: any;
  hasErrored?: any;
  isLoading?: any;
  token?: string;
};
interface IState {
};

class RestoreSession extends Component<IProps, IState> {
  constructor() {
    super();
  }

  public componentDidMount() {
    this.props.actions.tokenTryLoadFromLocalStorage()
      .then((token: any) => {
        console.log("Loaded token. props is", this.props);
        this.props.rootNavigation.navigate("UserProfile");
      })
      .catch((error: any) => {
        this.props.rootNavigation.navigate("SignInEmail");
      });
  }

  public render() {
    if (this.props.hasErrored) {
      return <Text>Sorry! There was an error loading the items</Text>;
    }
    if (this.props.isLoading) {
      return <Text>Loading…</Text>;
    }
    return (
      <View><Text>Token loaded: {this.props.token}</Text></View>
    );
  }
};

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(RestoreSession) as React.ComponentClass<IProps>;
