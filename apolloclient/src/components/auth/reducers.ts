"use strict";
import createReducer from "../../lib/createReducer";
import * as signin_types from "../../systems/auth/sign_in_email/action_types";
import * as types from "./action_types";

export function tokenHasErrored(state = false, action: any) {
  switch (action.type) {
    case "TOKEN_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}

export function tokenIsLoading(state = false, action: any) {
  switch (action.type) {
    case "TOKEN_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

export function auth_token(state = "", action: any) {
  switch (action.type) {
    case signin_types.AUTH_SIGNIN:
      return action.token;
    default:
      return state;
  }
}
