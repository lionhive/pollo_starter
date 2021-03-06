"use strict";

interface IAction {
}

// TODO(tvykruta): Use proper typescript here, do not use "any".
export default function createReducer(initialState: any, handlers: any) {
  return (state = initialState, action: any) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/* Equivalent code:
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
*/
