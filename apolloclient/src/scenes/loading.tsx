"use strict";
// Simple white loading screen.

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import RestoreSession from "../components/auth/restore_session";

import styles from "../styles/blank";

interface IProps { };
interface IState { };

class Loading extends Component<IProps, IState> {
  private static propTypes = {
  };
  constructor() {
    super();
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Loading</Text>
        <RestoreSession/>
      </View>
    );
  }
}

// Inject redux actions and gql queries.
export default Loading;
