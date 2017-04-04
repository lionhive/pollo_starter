"use strict";
import createReducer from "../../lib/createReducer";
import * as types from "./action_types";

const initialState: any = {
  auth_token: null,
  authenticated: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'blah'://types.AUTH_SIGNIN:
      console.log("AUTH_SIGNIN reducer called with token:" + action.token);
      return {
        ...state,
        auth_token: action.token,
        authenticated: true,
      };
    case types.AUTH_SIGNOUT:
      return {
        ...state,
        auth_token: null,
        authenticated: false,
      };
    default:
      return state;
  }
};

/*
export const signIn = createReducer(initialState, {
    [types.AUTH_SIGNIN](state: any, action: any) {
        let newState = action.token;
        return newState;
    },
});

export const signOut = createReducer(initialState, {
    [types.AUTH_SIGNOUT](state: any, action: any) {
        let newState = action.token;
        return newState;
    },
});
*/