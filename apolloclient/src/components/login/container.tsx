"use strict";

import React, { Component } from 'react';
import Login from "./component";

interface Props {}  // empty.
interface State {}  // empty.
class LoginContainer extends Component<Props, State> {
  render() {
    return (<Login/>);
  }
}

export default LoginContainer;