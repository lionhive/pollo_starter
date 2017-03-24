"use strict";
import createReducer from "../../lib/createReducer";
import * as types from "./action_types";

// TODO: Use Action object and proper typscriptting look at
// https://github.com/jaysoo/todomvc-redux-react-typescript

// Reducers will show in a Component's this.props.users.<reducername>
export const usernameInput = createReducer("tvykruta", {
    [types.USERNAME_CHANGED](state: any, action: any) {
        let newState = action.username;
        return newState;
    },
});
