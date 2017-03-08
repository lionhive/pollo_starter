// Redux reducers.
import { combineReducers } from 'redux';
import * as users from './users';

export default combineReducers(Object.assign(
    users,
));
