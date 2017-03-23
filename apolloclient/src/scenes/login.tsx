"use strict";

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Login from '../components/login/container';


class LoginScene extends Component<void, void> {
  render() {
    return (<Login/>);
  };
}

export default LoginScene;