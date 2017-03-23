"use strict";

import * as types from "./action_types.js";

export function actionUsernameChanged(username: string) {
  return {
    type: types.USERNAME_CHANGED,
    username,
  };
}
