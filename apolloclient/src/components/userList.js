"use strict";
import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';
import styles from '../styles/userList.js';

// Presentational component for rendering.
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ScrollView>
        {this.props.users.map(this.renderUser)}</ScrollView>;
  }
  // Render a single user row.
  renderUser({name, username}) {
    console.log(name, username);
    return <Text style={styles.row}>Username:{name} Name:{username}</Text>;
  }
}


export default UserList;