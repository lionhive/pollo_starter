"use strict";
import { saveToken } from "../../../utils/local_storage";
import { signIn, signInError } from "../sign_in_email/action_creators";
import * as types_token from "../token/action_types";
import * as types from "./action_types";

/* Implement signup flow.

  signUp: true
  graphQl createUser(variables)
  response: valid token
  write/broadcast token
  signUp: false
  resolve()
  
  ...component...
  route -> new route
*/


export function signingUp(bool: boolean) {
  return {
    type: types.SIGN_UP,
    signingUp: bool,
  };
};

export function signUpError(error: string) {
  return {
    type: types.SIGN_UP_ERROR,
    error,
  };
};

import * as server from "./server";

// TODO(tvykruta): The catch() statement triggers, but this function still returns
// then() instead of catch() in sign_up/container.tsx. FIgure out why.
export function signUpFlow(values: any) {
  return (dispatch: any, getState: any, client: any) => {
    dispatch(signingUp(true));
    return server.signUp(client, values)
      .then((response: any) => {
        if (response.data.authenticate_user.token) {
          dispatch(signIn(response.data.authenticate_user.token));
        } else {
          dispatch(signInError("Token not foundl"));
        }
        console.log("signUpFlow48 response:" + response);
        return response;
      })
      // TODO(Tvykruta): invalidate user profile, force refetch.
      .then((response: any) => {
        console.log("signUpFlow54 response:" + response);
        dispatch(signingUp(false));
        return response;
      })
      .catch((err: any) => {
        console.log("Sign up error!" + err);
        dispatch(signInError(err));
        dispatch(signingUp(false));
        return Promise.reject(err);
      });
  };
}
