// User Component declaration.
"use strict";
import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles.js";

interface IProps {
  actions: any;
  data: any;
};
interface IState { };

class UserProfile extends Component<IProps, IState> {
  constructor() {
    super();
  }

  public render() {
    if (this.props.data.loading) {
      return (<Text style={{ marginTop: 64 }}>Loading</Text>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<Text style={{ marginTop: 64 }}>An unexpected error occurred</Text>);
    }

    console.log(this.props);
    if (!this.props.data.user_authenticated) {
      return (<Text style={{ marginTop: 64 }}>User not found.</Text>);
    }
    console.log("dump props");
    console.log(this.props);
    const user = this.props.data.user_authenticated;
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>User signed in with JSON web token.</Text>
        <Text style={{ textAlign: "center" }}>Name: {user.name}</Text>
        <Text style={{ textAlign: "center" }}>Username: {user.username}</Text>
        <Text style={{ textAlign: "center" }}>ID: {user._id}</Text>
        <Text onPress={() => Actions.login_scene()}>
          Navigate to Home
        </Text>
        <Text onPress={() => this.props.actions.signOut().then(Actions.login_scene())}>
          Sign Out User
        </Text>
        
      </View>
    );
  }
}

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(UserProfile);
