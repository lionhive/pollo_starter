"use strict";

import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
  background:  {
      height: null,
      width: null,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d73352",
    justifyContent: "center",
    marginVertical: 15,
    paddingVertical: 15,
  } as ViewStyle,
  buttonText: {
    color: "white",
    fontSize: 18,
  } as ViewStyle,
  container: {
    flex: 2,
  } as ViewStyle,
  forgotPasswordText: {
    backgroundColor: "transparent",
    color: "red",
    textAlign: "center",
  } as ViewStyle,
  icon: {
    backgroundColor: "transparent",
    height: 20,
    width: 20,
  } as ViewStyle,
  iconWrap: {
    alignItems: "center",
    backgroundColor: "#d73352",
    justifyContent: "center",
    paddingHorizontal: 7,
  } as ViewStyle,
  input: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingHorizontal: 10,
  } as ViewStyle,
  inputWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: 40,
    marginVertical: 10,
  } as ViewStyle,
  logoIcon: {
    backgroundColor: "transparent",
    height: 50,
    tintColor: "white",
    width: 50,
  } as ViewStyle,
  logoIconWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: 40,
    marginVertical: 10,
  } as ViewStyle,
  logoText: {
    color: "white",
    fontSize: 40,
    marginLeft: 10,
  } as ViewStyle,
  logoWrap: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 3,
    justifyContent: "center",
    paddingHorizontal: 7,
    paddingVertical: 80,
  } as ViewStyle,

  wrapper: {
    paddingHorizontal: 15,
  } as ViewStyle,
});
