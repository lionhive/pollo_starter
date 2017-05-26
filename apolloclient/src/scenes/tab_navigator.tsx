"use strict";
import React from "react";

import { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";


class BlankScreen extends Component<any, any> {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../resources/components/login/images/lock.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  public render() {
    return (
      <View><Text>Blank screen.</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DrawerDemo")}
          title="Open DrawerDemo"
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

import { AppDrawerNavigator } from "./drawer_navigator";

const AppTabNavigator = TabNavigator({
  Explore: { screen: BlankScreen },
  Saved: { screen: BlankScreen },
  Trips: { screen: BlankScreen },
  Inbox: { screen: BlankScreen },
  Profile: { screen: BlankScreen },

  DrawerDemo: { screen: AppDrawerNavigator },
});

export { AppTabNavigator };
