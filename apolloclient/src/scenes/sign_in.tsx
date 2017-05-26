"use strict";

import React, { Component } from "react";
import { View } from "react-native";
import SignInSceneComponent from "../components/sign_in_email_fancy/component";

interface IProps {
  navigation: any;
};
class SignInScene extends Component<IProps, void> {
  public render() {
    return (<SignInSceneComponent rootNavigation={this.props.navigation}/>);
  };
}

export default SignInScene;
