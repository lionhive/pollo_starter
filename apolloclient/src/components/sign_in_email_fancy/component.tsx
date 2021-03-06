"use strict";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

const background = require("../../../resources/components/login/images/background_anim.gif");
const bear = require("../../../resources/components/login/images/bear.png");

import SignInForm from "../sign_in_email/container";
interface IProps { };
interface IState { };

class SignInEmailComponent extends Component<IProps, IState> {
  constructor() {
    super();
  }
  public render() {
    return (
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover">
        <View style={styles.container} />
        <View style={styles.wrapper} >
          <View style={styles.logoWrap} >
            <View style={styles.logoIconWrap} >
              <Image
                source={bear}
                style={styles.logoIcon}
                resizeMode="contain"
              />
              <Text style={styles.logoText}>bearbnb</Text>
            </View>
          </View>
        </View>
        <SignInForm />
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <Text style={styles.forgotPasswordText} >Forgot Password</Text>
            <Text style={styles.forgotPasswordText} onPress={() => Actions.sign_up_scene()}>Create New Account</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.container} />
      </Image>);
  };
};

// Inject redux actions and gql queries.
export default SignInEmailComponent;
