// User Component declaration. 
"use strict";
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles.js';


interface Props {
  actions: any;
  addUser: Function;
  searchedRecipes: any;
  data: any;
  users: any;
} 
interface State {}  // empty.
class User extends Component<Props, State> {
  constructor() {
    super();
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
  }
  // TODO Injected propTypes should be defined in user.js.
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      user: React.PropTypes.object,
    }).isRequired,
    // mutations
    addUser: React.PropTypes.func.isRequired,
  };
  // Calls user changed redux action.
  onUsernameChanged(username: string) {
    this.props.actions.actionUsernameChanged(username);
    console.log(this.props);
  }
  // Calls add user mutation.
  onAddUser(event: any) {
    let username = event.nativeEvent.text;
    let vars = {username:username, name:username, password:"test"};
    this.props.addUser({variables: vars});
  }
  recipes() {
      return Object.keys(this.props.searchedRecipes).map(
          key => this.props.searchedRecipes[key]);
  }

  render() {
    if (this.props.data.loading) {
      return (<Text style={{marginTop: 64}}>Loading</Text>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<Text style={{marginTop: 64}}>An unexpected error occurred</Text>);
    }

    console.log(this.props);
    if (!this.props.data.user) {
      return (<Text style={{marginTop: 64}}>User not found.</Text>);
    }
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Show User</Text>
        <TextInput
          onChangeText={this.onUsernameChanged}
          style={styles.input} />
        <TextInput />
        <Text style={{textAlign: 'center'}}>Add User</Text>
        <TextInput
          onEndEditing={this.onAddUser}
          style={styles.input} />
        <TextInput />
        <Text>Redux username_input is {this.props.users.username_input}</Text>
        <Text>Name: {this.props.data.user.name}</Text>
        <Text>Username: {this.props.data.user.username}</Text>
      </View>
    )
  }
}

// Inject redux actions and gql queries.
import Connector from './connector.js';
export default Connector(User);