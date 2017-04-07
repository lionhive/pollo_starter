"use strict";
import { Actions } from "react-native-router-flux";
import thunk from "redux-thunk";
import { tryLoadToken } from "../../../utils/local_storage";
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

export function tokenSet(token: string) {
  return {
    type: types.AUTH_TOKEN_SET,
    token,
  };
}

// Tries to load auth token from local storage and initializes redux store.
// TODO(tvykruta): Create separate reducers for handling local storage of token.
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
      .then((token) => dispatch(tokenSet(token)))
      .then(() => Actions.profile_scene())
      .catch(() => dispatch(tokenHasErrored(true)));
  };
}
