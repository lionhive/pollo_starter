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
const lockIcon = require("../../../resources/components/login/images/lock.png");
const personIcon = require("../../../resources/components/login/images/person.png");
const bear = require("../../../resources/components/login/images/bear.png");

interface IProps {};
interface IState {};

class Login extends Component<IProps, IState> {
  constructor() {
    super();
  }
  private _onPressSubmit() {
    Actions.user_scene();
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
        <View style={styles.wrapper} >
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={personIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Username"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={lockIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Password!!"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={this._onPressSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container} />
      </Image>);
  };
};

export default Login;
