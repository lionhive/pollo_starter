"use strict";
import { Actions } from "react-native-router-flux";
import thunk from "redux-thunk";
import * as signin_types from "../../systems/auth/sign_in_email/action_types";
import { tryLoadToken } from "../../utils/auth//utils_local_storage";
import * as types from "./action_types.js";

export function tokenHasErrored(bool: boolean = false) {
  return {
    type: "TOKEN_HAS_ERRORED",
    hasErrored: bool,
  };
}

export function tokenIsLoading(bool: boolean = false) {
  return {
    type: "TOKEN_IS_LOADING",
    isLoading: bool,
  };
}

export function authSignIn(token: string) {
  return {
    type: signin_types.AUTH_SIGNIN,
    token,
  };
}

// Tries to load auth token from local storage and initializes redux store.
export function actionLoadLocalAuthToken() {
  console.log("waiting on token loading..");
  return (dispatch: any) => {
    dispatch(tokenIsLoading(true));
    tryLoadToken()
      .then((token) => {
        if (!token) {
          throw Error("Token failed to load.");
        }
        console.log("token loaded:" + token);
        dispatch(tokenIsLoading(false));
        return token;
      })
      .then((token) => dispatch(authSignIn(token)))
      .then(() => Actions.profile_scene())
      .catch(() => dispatch(tokenHasErrored(true)));
  };
}
