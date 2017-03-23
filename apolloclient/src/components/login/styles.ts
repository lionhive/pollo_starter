'use strict';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 2,
  } as ViewStyle,
  background:  {
      width: null,
      height: null,
  },
  wrapper: {
    paddingHorizontal: 15,
  } as ViewStyle,
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent',
  } as ViewStyle,
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  } as ViewStyle,
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#d73352",
  } as ViewStyle,
  icon: {
    height: 20,
    width: 20,
    backgroundColor: 'transparent',
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center', 
    paddingVertical: 15,
    marginVertical: 15,
    backgroundColor: "#d73352",
  } as ViewStyle,
  buttonText: {
    color: 'white',
    fontSize: 18,
  } as ViewStyle,
  forgotPasswordText: {
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
  } as ViewStyle,
  logoWrap: {
    paddingVertical: 80,
    flex: 3,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  } as ViewStyle,
  logoIconWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent',
  } as ViewStyle,
  logoIcon: {
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    tintColor: 'white',
  } as ViewStyle,
  logoText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 40,
  } as ViewStyle,
});
