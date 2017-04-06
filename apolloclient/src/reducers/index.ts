// Redux reducers.
"use strict";
import { combineReducers } from "redux";
import * as auth from "../components/auth/reducers";
import * as users from "../components/user/reducers";
import * as authentication from "../systems/auth/sign_in_email/reducers";

export default {
  auth: combineReducers(Object.assign({}, auth)),
  authentication: combineReducers(Object.assign({}, authentication)),
  users: combineReducers(Object.assign({}, users)),
};
