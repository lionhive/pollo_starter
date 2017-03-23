"use strict";
import createReducer from '../../lib/createReducer';
import * as types from './action_types';

// Reducers will show in a Component's this.props.users.<reducername>
export const username_input = createReducer('tvykruta', {
    [types.USERNAME_CHANGED](state: any, action: any) {
        let newState = action.username;
        return newState;
    },
});