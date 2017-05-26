"use strict";
// Simple white loading screen.

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import RestoreSession from "../components/restore_session/container";

import styles from "../styles/blank";

interface IProps {
  navigation: any;
}

class Loading extends Component<IProps, any> {
  private static propTypes = {
  };
  constructor() {
    super();
  }

  public render() {
    console.log("Loading Render  called, props is", this.props);
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Loading</Text>
        <RestoreSession rootNavigation={this.props.navigation}/>
      </View>
    );
  }
}

// Inject redux actions and gql queries.
export default Loading;
