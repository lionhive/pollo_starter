"use strict";
// User Component declaration.

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

import UserProfile from "../components/user_profile/container";
import UserListContainer from "../components/userList/container.js";
import styles from "../styles/blank";

interface IProps {
  navigation: any;
 };
interface IState { };

class Blank extends Component<IProps, IState> {
  private static propTypes = {
  };
  constructor() {
    super();
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Blank Component</Text>
        <Text onPress={() => this.props.navigation.navigate("UserProfile")}>
          Navigate to Profile Screen
        </Text>

        <Text onPress={() => this.props.navigation.navigate("President")}>
          Navigate to President Screen
        </Text>
        <Text onPress={() => this.props.navigation.navigate("SignInEmail")}>
          Navigate to Login Screen
        </Text>
      </View>
    );
  }
}

// Inject redux actions and gql queries.
export default Blank;
