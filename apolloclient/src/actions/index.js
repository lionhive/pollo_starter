// Redux action creators. Actions are creatded by these factories and dispatched
// to the redux store. Dispatching happens implicitly because the factories are wrapped
// with bindActionCreators.
"use strict";
import * as UserActions from './users';

export const ActionCreators = Object.assign([],
    UserActions,
);