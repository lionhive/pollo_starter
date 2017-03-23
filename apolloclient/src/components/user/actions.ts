"use strict";
import * as types from './action_types.js';

export function actionUsernameChanged(username: String) {
  return {
    type: types.USERNAME_CHANGED,
    username,
  }
}