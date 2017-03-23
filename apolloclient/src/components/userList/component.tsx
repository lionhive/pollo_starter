"use strict";
import React, { Component } from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';

// Presentational component for rendering.
interface Props {
  users: any;
}  // empty.
interface State {}  // empty.
class UserList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <View style={styles.scroll_view}>
            <ScrollView>
            {this.props.users.map(this.renderUser)}</ScrollView></View>;
  }
  // Render a single user row.
  renderUser({name, username}: {name: string, username: string}) {
    console.log(name, username);
    return <Text style={styles.row}>Username:{name} Name:{username}</Text>;
  }
}


export default UserList;