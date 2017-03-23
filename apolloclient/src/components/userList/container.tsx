// Container for fetching UserList data
"use strict";
import React, { Component } from "react";
import { Text } from "react-native";
import UserList from "./component";

interface IProps {
  data?: any;
}  // empty.
interface IState {}  // empty.
class UserListContainer extends React.Component<IProps, IState> {
  // TODO Injected propTypes should be defined in user.js.
  public static propTypes = {
    data: React.PropTypes.shape({
      error: React.PropTypes.object,
      loading: React.PropTypes.bool,
      users: React.PropTypes.array,
    }).isRequired,
  };
  constructor() {
    super();
  }

  public render() {
    if (this.props.data.loading) {
      return (<Text style={{marginTop: 64}}>Loading</Text>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<Text style={{marginTop: 64}}>An unexpected error occurred</Text>);
    }

    if (!this.props.data.users) {
      return (<Text style={{marginTop: 64}}>Users not found.</Text>);
    }
    return <UserList users={this.props.data.users} />;
  }
}

// Inject redux actions and gql queries.
import Connector from "./connector.js";
export default Connector(UserListContainer);
