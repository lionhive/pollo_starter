"use strict";

import React, { Component } from "react";
import { View } from "react-native";
import SignInSceneComponent from "../components/sign_in_email_fancy/container";

class SignInScene extends Component<void, void> {
  public render() {
    return (<SignInSceneComponent />);
  };
}

export default SignInScene;
