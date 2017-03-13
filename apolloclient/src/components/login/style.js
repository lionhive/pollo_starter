'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 2,
  },
  background:  {
      width: null,
      height: null,
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d73352",
  },
  icon: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
  },
  button: {
    alignItems: "center",
    justifyContent: "center", 
    paddingVertical: 15,
    marginVertical: 15,
    backgroundColor: "#d73352",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  logoWrap: {
      paddingVertical: 80,
      flex: 3,
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  logoIconWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
  },
  logoIcon: {
    height: 50,
    width: 50,
    backgroundColor: "transparent",
    tintColor: "white",
  },
  logoText: {
    marginLeft: 10,
    color: "white",
    fontSize: 40,
  },

});
