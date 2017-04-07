"use strict";
import { clearToken } from "../../../utils/local_storage";
import * as types2 from "../sign_in_email/action_types";
import * as types from "./action_types";

export function signingOut(bool: boolean) {
  return {
    type: types.AUTH_SIGNING_OUT,
    signingOut: bool,
  };
};

// TODO: Rename AUTH_SIGNIN to SETTOKEN.
export function signOutAction() {
  return {
    token: "",
    type: types2.AUTH_TOKEN_SET,
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
