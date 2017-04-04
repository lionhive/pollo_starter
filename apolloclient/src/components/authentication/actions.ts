"use strict";
import { clearToken, saveToken } from "../../utils/auth//utils_local_storage";
import * as types from "./action_types.js";

// Handle user authentication.
// TODO(tcykruta): Check for successful operation of ASyncStorage.
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
