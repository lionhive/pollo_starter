"use strict";
import * as types from './types';


/*
export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      dispatch(setSearchedRecipes({ recipes: resp }));
      //console.log(resp);
    }).catch((ex) => {
      console.log(ex);
    });
  }
}
*/

export function actionUsernameChanged(username) {
  return {
    type: types.USERNAME_CHANGED,
    username,
  }
}