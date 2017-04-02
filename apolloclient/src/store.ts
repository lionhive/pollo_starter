// Creates apollo client, redux, and shared store.
"use strict";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import users from "./reducers/index.js";
import redux_logger from "./redux_logger.js";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: "http://localhost:8080/graphql"}),
});

import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  apollo: client.reducer(),
  form: formReducer,
  users});
const enhancer = compose(
      applyMiddleware(client.middleware(), ...redux_logger),
      // If you are using the devToolsExtension, you can add it here also
      // (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  );
const store: Store<any> = createStore(
  reducers,
  {}, // initial state
  enhancer,
);

// Load auth token if one exists.
import Auth from "./utils/auth/load";
Auth(store);

export { client, store };
