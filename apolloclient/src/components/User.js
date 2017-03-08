import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

import { graphql } from 'react-apollo';
import userQuery from '../queries/user.js';
import styles from '../styles/user.js';

class User extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      user: React.PropTypes.object,
    }).isRequired,
  };

  render () {
    if (this.props.data.loading) {
      return (<Text style={{marginTop: 64}}>Loading</Text>);
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<Text style={{marginTop: 64}}>An unexpected error occurred</Text>);
    }

    console.log(this.props.data);
    if (!this.props.data.user) {
      return (<Text style={{marginTop: 64}}>User not found.</Text>);
    }
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Show User</Text>
        <TextInput
          onChangeText={this.updateName}
          style={styles.input} />
        <TextInput />
        <Text>Name: {this.props.data.user.name}</Text>
        <Text>Username: {this.props.data.user.username}</Text>
      </View>
    )
  }
}


const UserWithData = graphql(userQuery, {
      options: { variables: { name: "tom" } }
    })(User);

export default UserWithData