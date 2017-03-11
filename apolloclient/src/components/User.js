"use strict";
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from '../styles/user.js';


class User extends Component {
  constructor() {
    super();
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
  }
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
  onUsernameChanged(username) {
    this.props.actions.actionUsernameChanged(username);
    console.log(this.props);
  }
  // Calls add user mutation.
  onAddUser(event) {
    let username = event.nativeEvent.text;
    let vars = {username:username, name:username, password:"test"};
    this.props.addUser({variables: vars});
  }
  recipes() {
      return Object.keys(this.props.searchedRecipes).map(
          key => this.props.searchedRecipes[key]);
  }

  render () {
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

//
// Above, we've finished all apollo binding.
// Redux binding starts here.
//

import { connect } from 'react-redux';

// Note: Coupling the Component's map function directly to the Redux state is bad, solution:
// https://goshakkk.name/redux-antipattern-mapstatetoprops/

// Map redux store state to properties.
// state.<reducername> is the reducers/<file.js> name.
function mapStateToProps(state) {
  return { 
    users: state.users,
   };
}
// Map action functions.
import { ActionCreators } from '../actions';
// Note: It is possible to bind ActionCreators to other functions
// besides Props. See http://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux
import { bindActionCreators } from 'redux'
function mapDispatchToProps(dispatch) {
    // 'actions:' organizes callbacks into props.actions.<function_name>.
    return {actions: bindActionCreators(ActionCreators, dispatch)};
}

import {userQuery, addUserMutation} from '../queries/user.js';
const userQueryOptions = {
      options: { variables: { name: "tvykruta" } }};
// The mutation func will be accessilbe through props.addUser()
const addUserMutationOptions = { name: "addUser" };

import { graphql, compose } from 'react-apollo';
export default compose(
  graphql(userQuery, userQueryOptions),
  graphql(addUserMutation, addUserMutationOptions),
  connect(mapStateToProps, mapDispatchToProps),
)(User);
