"use strict";
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
export function tokenTryLoadFromLocalStorage() {
  console.log("Trying to load token from local storage..");
  return (dispatch: any, getState: any, client: any) => {
    dispatch(tokenIsLoading(true));
    return tryLoadToken()
      .then((token) => {
        if (!token) {
          throw Error("Token failed to load.");
        }
        console.log("token loaded:" + token);
        dispatch(tokenIsLoading(false));
        return token;
      })
      .then((token) => {
        dispatch(tokenSet(token));
        return token;
      })
      .catch((error) => {
        dispatch(tokenHasErrored(true));
        return Promise.reject(error);
      });
  };
}
