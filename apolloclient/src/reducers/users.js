import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const reducerUsernameChanged = createReducer(0, {
    [types.USERNAME_CHANGED](state, action) {
        console.log("reducerUsernameChanged: ", state, action);
        let newState = action.username;
        return newState;
    },
});