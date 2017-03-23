// Container for fetching UserList data
"use strict";
import React, { Component } from 'react';
import { Text } from 'react-native';
import UserList from './component';


interface Props {
  data?: any;
}  // empty.
interface State {}  // empty.
class UserListContainer extends React.Component<Props, State> {
  constructor() {
    super();
  }
  // TODO Injected propTypes should be defined in user.js.
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      users: React.PropTypes.array,
    }).isRequired,
  };

  render() {
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
import Connector from './connector.js';
export default Connector(UserListContainer);