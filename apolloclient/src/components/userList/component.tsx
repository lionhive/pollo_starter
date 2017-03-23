"use strict";
import React, { Component } from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";

// Presentational component for rendering.
interface IProps {
  users: any;
}  // empty.
interface IState {}  // empty.
class UserList extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return <View style={styles.scroll_view}>
            <ScrollView>
            {this.props.users.map(this.renderUser)}</ScrollView></View>;
  }
  // Render a single user row.
  private renderUser({name, username}: {name: string, username: string}) {
    console.log(name, username);
    return <Text style={styles.row}>Username:{name} Name:{username}</Text>;
  }
}

export default UserList;
