// Redux reducers.
"use strict";
import { combineReducers } from "redux";
import * as users from "../components/user/reducers";

export default combineReducers(Object.assign(
    users,
));
