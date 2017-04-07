"use strict";

import React, { Component } from "react";
import Login from "./component";

interface IProps {};
interface IState {};

class LoginContainer extends Component<IProps, IState> {
  public render() {
    return (<Login/>);
  }
}

export default LoginContainer;
