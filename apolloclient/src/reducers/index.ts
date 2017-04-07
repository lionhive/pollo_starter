// Redux reducers.
"use strict";
import { combineReducers } from "redux";
import * as auth from "../components/auth/reducers";
import * as users from "../components/user/reducers";
import * as sign_in_email from "../systems/auth/sign_in_email/reducers";
import * as sign_out from "../systems/auth/sign_out/reducers";

export default {
  auth: combineReducers(Object.assign({}, auth)),
  authentication: combineReducers(Object.assign({}, sign_in_email, sign_out)),
  users: combineReducers(Object.assign({}, users)),
};
