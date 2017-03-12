"use strict";
import React, { Component } from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles.js';

// Presentational component for rendering.
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.scroll_view}>
            <ScrollView>
            {this.props.users.map(this.renderUser)}</ScrollView></View>;
  }
  // Render a single user row.
  renderUser({name, username}) {
    console.log(name, username);
    return <Text style={styles.row}>Username:{name} Name:{username}</Text>;
  }
}


export default UserList;