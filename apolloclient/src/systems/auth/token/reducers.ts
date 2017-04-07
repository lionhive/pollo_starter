"use strict";
import createReducer from "../../../lib/createReducer";
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

// Sets token to redux store to a value or sets to null.
export function token(state = "", action: any) {
  switch (action.type) {
    case types.AUTH_TOKEN_SET:
      return action.token;
    default:
      return state;
  }
}
