"use strict";
import * as types from "./action_types";

export function signingIn(state = false, action: any) {
  switch (action.type) {
    case types.AUTH_SIGNING_IN:
      return action.signingIn;
    default:
      return state;
  }
}
