"use strict";
import { clearToken, saveToken } from "../../utils/auth//utils_local_storage";
import * as types from "./action_types.js";


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

// Remove user  authentication.
export function signOut() {
  clearToken();
  return { type: types.AUTH_SIGNOUT };
};

