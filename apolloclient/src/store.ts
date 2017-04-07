// Creates apollo client, redux, and shared store.
"use strict";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import redux_thunk from "redux-thunk";
import all_reducers from "./reducers/index";
import redux_logger from "./redux_logger";

// Set up network listener.
const networkInterface = createNetworkInterface({ uri: "http://localhost:8080/graphql" });
const client = new ApolloClient({ networkInterface });

// Set up apollo reducer
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  apollo: client.reducer(),
  ...all_reducers,
  form: formReducer,
});
// Inject enhancers such as logging tools.
const enhancer = compose(
  applyMiddleware(client.middleware(), redux_thunk.withExtraArgument(client), ...redux_logger),
  // If you are using the devToolsExtension, you can add it here also
  // (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);
const store: Store<any> = createStore(
  reducers,
  {}, // initial state
  enhancer,
);

// Inject authenticated JWT token into 'headers.authorization'.
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = store.getState().auth.token;
    if (token) {
      console.log("issuing network request with header."); ;
      req.options.headers.authorization = "JWT " + token;
    }
    next();
  },
}]);

export { client, store };
