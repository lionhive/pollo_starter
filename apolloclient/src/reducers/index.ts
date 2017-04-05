// Redux reducers.
"use strict";
import { combineReducers } from "redux";
import * as auth from "../components/auth/reducers";
import * as authentication from "../components/authentication/reducers";
import * as users from "../components/user/reducers";

export default {
  auth: combineReducers(Object.assign({}, auth)),
  authentication: combineReducers(Object.assign({}, authentication)),
  users: combineReducers(Object.assign({}, users)),
};
