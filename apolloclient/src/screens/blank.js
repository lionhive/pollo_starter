"use strict";
// User Component declaration. 

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/blank.js';
import UserListContainer from '../components/userList/container.js';

class Blank extends Component {
  constructor() {
    super();
  }
  static propTypes = {
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Blank Component</Text>
        <UserListContainer/>
      </View>
    )
  }
}

// Inject redux actions and gql queries.
export default Blank;