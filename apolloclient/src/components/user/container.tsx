// User Component declaration.
"use strict";
import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles.js";

interface IProps {
  actions: any;
  addUserMutation: Function;
  searchedRecipes: any;
  data: any;
  users: any;
};
interface IState { };

class User extends Component<IProps, IState> {
  // TODO Injected propTypes should be defined in user.js.
  public static propTypes = {
    // mutations
    addUserMutation: React.PropTypes.func.isRequired,
    data: React.PropTypes.shape({
      error: React.PropTypes.object,
      loading: React.PropTypes.bool,
      user: React.PropTypes.object,
    }).isRequired,
  };
  constructor() {
    super();
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
  }

  // Calls user changed redux action.
  private onUsernameChanged(username: string) {
    this.props.actions.actionUsernameChanged(username);
    console.log(this.props);
  }
  // Calls add user mutation.
  private onAddUser(event: any) {
    let username = event.nativeEvent.text;
    let vars = { username, name: username, password: "test" };
    console.log("calling addUserMUtation");
    this.props.addUserMutation({ variables: vars }).then((response: any) => {
      console.log("response: " + response);
    }).catch((err: any) => {
      console.error(err);
    });
  }
  private recipes() {
    return Object.keys(this.props.searchedRecipes).map(
      (key) => this.props.searchedRecipes[key]);
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
    if (!this.props.data.user) {
      return (<Text style={{ marginTop: 64 }}>User not found.</Text>);
    }
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Show User</Text>
        <TextInput
          onChangeText={this.onUsernameChanged}
          style={styles.input} />
        <TextInput />
        <Text style={{ textAlign: "center" }}>Add User</Text>
        <TextInput
          onEndEditing={this.onAddUser}
          style={styles.input} />
        <TextInput />
        <Text>Redux usernameInput is {this.props.users.usernameInput}</Text>
        <Text>Name: {this.props.data.user.name}</Text>
        <Text>Username: {this.props.data.user.username}</Text>
      </View>
    );
  }
}

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(User);
