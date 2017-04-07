"use strict";
import { clearToken } from "../../../utils/local_storage";
import * as types_token from "../token/action_types";
import * as types from "./action_types";

export function signingOut(bool: boolean) {
  return {
    type: types.SIGN_OUT,
    signingOut: bool,
  };
};

export function signOutAction() {
  return {
    token: "",
    type: types_token.AUTH_TOKEN_SET,
  };
};

// Main entry point for sign out
export function signOut() {
  return (dispatch: any, getState: any, client: any) => {
    console.log("signOutFlow()");
    dispatch(signingOut(true));
    clearToken();
    dispatch(signOutAction());
    dispatch(signingOut(false));
    return Promise.resolve();
  }
}
