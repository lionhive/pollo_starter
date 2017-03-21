// redux-logger initialization. When enabled through redux store, outputs
// redux state changes into console.
"use strict";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


const logger = createLogger();

export default [thunk, promise, logger];
