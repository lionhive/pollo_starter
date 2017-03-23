// redux-logger initialization. When enabled through redux store, outputs
// redux state changes into console.
"use strict";
import createLogger from "redux-logger";
import promise from "redux-promise";
import thunk from "redux-thunk";

const logger = createLogger();

export default [thunk, promise, logger];
