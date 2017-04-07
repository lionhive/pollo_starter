"use strict";
import { clearToken, saveToken } from "../../../utils/auth//utils_local_storage";
import * as types from "./action_types";

export function signingIn(bool: boolean) {
  return {
    type: types.AUTH_SIGNING_IN,
    signingIn: bool,
  };
};

export function signIn(token: string) {
  saveToken(token);
  return {
    type: types.AUTH_SIGNIN,
    token,
  };
};

export function signInError(error: string) {
  return {
    type: types.AUTH_SIGN_IN_ERROR,
    error,
  };
};
// Remove user  authentication.
export function signOut() {
  clearToken();
  return { type: types.AUTH_SIGNOUT };
};

import * as server from "./server";

export function signInEmail(values: any) {
  return (dispatch: any, getState: any, client: any) => {
    dispatch(signingIn(true));
    return server.SignIn(client, values)
      .then((response: any) => {
        if (response.data.authenticate_user.token) {
          dispatch(signIn(response.data.authenticate_user.token));
        } else {
          dispatch(signInError(response.data.authenticate_user.token));
        }
        return response;
      })
      .then((response: any) => {
        dispatch(signingIn(false));
        return response.data.authenticate_user;
      })
      .catch((err: any) => {
        console.log("Sign in error!" + err);
        return err;
      });
  };
}