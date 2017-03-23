"use strict";
// User Component declaration.

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

import UserListContainer from "../components/userList/container.js";
import styles from "../styles/blank";

interface IProps {}  // empty.
interface IState {}  // empty.

class Blank extends Component<IProps, IState> {
  private static propTypes = {
  };
  constructor() {
    super();
  }

  public render () {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: "center"}}>Blank Component</Text>
        <UserListContainer/>
        <Text onPress={() => Actions.user_scene()}>
            Navigate to User Screen
        </Text>
        <Text onPress={() => Actions.president_scene()}>
            Navigate to President Screen
        </Text>
      </View>
    );
  }
}

// Inject redux actions and gql queries.
export default Blank;
