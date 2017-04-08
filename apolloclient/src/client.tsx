// Set up for Apollo and base scene.
"use strict";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-native-router-flux";
import { client, store } from "./store.js";

import scenes from "./scenes";
export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes} />
  </ApolloProvider>
);
