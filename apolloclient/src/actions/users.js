"use strict";
import * as types from './types';

export function actionUsernameChanged(username) {
  return {
    type: types.USERNAME_CHANGED,
    username,
  }
}