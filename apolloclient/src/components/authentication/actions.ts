"use strict";
import { AsyncStorage } from "react-native";
import * as types from "./action_types.js";

// Handle user authentication.
// TODO(tcykruta): Check for successful operation of ASyncStorage.
export const signIn = (token: string) => {
  console.log(AsyncStorage);
  AsyncStorage.setItem("token", token);
  return { type: types.AUTH_SIGNIN };
};

// Remove user  authentication.
export const signOut = () => {
  AsyncStorage.removeItem("token");
  return { type: types.AUTH_SIGNOUT };
};
