"use strict";

import React, { Component } from "react";
import Login from "./component";

interface IProps {}  // empty.
interface IState {}  // empty.
class LoginContainer extends Component<IProps, IState> {
  render() {
    return (<Login/>);
  }
}

export default LoginContainer;