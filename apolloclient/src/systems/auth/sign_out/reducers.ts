"use strict";
import * as types from "./action_types";

export function signingOut(state = false, action: any) {
  switch (action.type) {
    case types.SIGN_OUT:
      return action.signingOut;
    default:
      return state;
  }
}
