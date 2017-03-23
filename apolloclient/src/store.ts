// Creates apollo client, redux, and shared store.
"use strict";
import { Store, createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import redux_logger from './redux_logger.js';
import users from './reducers/index.js';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql'}),
});

const reducers = combineReducers({
  users: users,
  apollo: client.reducer()});
const enhancer = compose(
      applyMiddleware(client.middleware(), ...redux_logger),
      // If you are using the devToolsExtension, you can add it here also
      //(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  );
const store : Store<any> = createStore(
  reducers,
  {}, // initial state
  enhancer
);


export { client, store };