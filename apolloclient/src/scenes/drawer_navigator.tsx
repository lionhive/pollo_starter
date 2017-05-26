"use strict";
import React from "react";

import { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";


class BlankScreen extends Component<any, any> {
  public static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../resources/components/login/images/lock.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  private tintColor:string = "red";

  public render() {
    return (
      <View><Text>Blank screen.</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="Open Drawer"
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AppTabNavigator = TabNavigator({
  Explore: { screen: BlankScreen },
  Saved: { screen: BlankScreen },
  Trips: { screen: BlankScreen },
  Inbox: { screen: BlankScreen },
  Profile: { screen: BlankScreen },
});

const AppDrawerNavigator = DrawerNavigator({
  Payment: { screen: BlankScreen },
  History: { screen: BlankScreen },
  Services: { screen: BlankScreen },
  SendGift: { screen: BlankScreen },
  Settings: { screen: BlankScreen },
  Host: { screen: BlankScreen },
  Legal: { screen: BlankScreen },
});

export { AppTabNavigator, AppDrawerNavigator };
