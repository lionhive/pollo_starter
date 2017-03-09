"use strict";
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { graphql } from 'react-apollo';
import userQuery from '../queries/user.js';
import styles from '../styles/user.js';


class User extends Component {
  constructor() {
    super();
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
  }
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      user: React.PropTypes.object,
    }).isRequired,
  };

  onUsernameChanged(username) {
      this.props.actionUsernameChanged(username);
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
        <Text>Name: {this.props.data.user.name}</Text>
        <Text>Username: {this.props.data.user.username}</Text>
      </View>
    )
  }
}

const userQueryOptions = {
      options: { variables: { name: "tom" } }};
const UserWithData = graphql(userQuery, userQueryOptions)(User);
//export default UserWithData
//
// Above, we've finished all apollo binding.
// Redux binding starts here.
//

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// Map reducers.
function mapStateToProps(state) {
  return { 
    reducerUsernameChanged: state.reducerUsernameChanged,
   };
}

// Map action functions.
//import * as ActionCreators from '../actions';
import { ActionCreators } from '../actions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const userExport = connect(mapStateToProps, mapDispatchToProps)(UserWithData);
export default userExport;


/* more elegant:
import { graphql, compose } from 'react-apollo';
export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
*/
