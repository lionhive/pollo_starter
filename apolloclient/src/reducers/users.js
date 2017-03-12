"use strict";
import createReducer from '../lib/createReducer';
import * as types from '../components/user/action_types.js';

// Reducers will show in a Component's this.props.users.<reducername>
export const username_input = createReducer('tvykruta', {
    [types.USERNAME_CHANGED](state, action) {
        let newState = action.username;
        return newState;
    },
});