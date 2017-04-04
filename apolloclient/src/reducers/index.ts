// Redux reducers.
"use strict";
import { combineReducers } from "redux";
import * as auth from "../components/auth/reducers";
import * as authentication from "../components/authentication/reducers";
import * as users from "../components/user/reducers";

export default combineReducers(Object.assign(
    {},
    auth,
    users,
));
