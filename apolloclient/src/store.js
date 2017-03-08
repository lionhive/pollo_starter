"use strict";

// Creates apollo client, redux, and shared store.
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client'

import users from './reducers/index.js';
console.log("reducers");
console.log(users);

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql'}),
})

const store = createStore(
  combineReducers({
//    todos: todoReducer,
    users: users,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);


export { client, store };
