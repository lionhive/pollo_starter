"use strict";
import {clearToken, saveToken} from "../../utils/auth//utils_local_storage";
import * as types from "./action_types.js";

// Handle user authentication.
// TODO(tcykruta): Check for successful operation of ASyncStorage.
export const signIn = (token: string) => {
  saveToken(token);
  return { type: types.AUTH_SIGNIN };
};

// Remove user  authentication.
export const signOut = () => {
  clearToken();
  return { type: types.AUTH_SIGNOUT };
};
