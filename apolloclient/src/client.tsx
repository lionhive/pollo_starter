// Set up for Apollo and base scene.
"use strict";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Actions, Router, Scene } from "react-native-router-flux";
import { client, store } from "./store.js";

import Auth from "./components/authentication/container";
import User from "./components/user/container";
import President from "./container/president";
import Blank from "./scenes/blank";
import Login from "./scenes/login";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="auth" component={Auth} title="Login" initial={true} hideNavBar={true} type="replace" />
    <Scene key="login_scene" component={Login} title="Login" initial={false} hideNavBar={true} type="replace" />
    <Scene key="blank_scene" component={Blank} title="Blank" initial={false} type="replace" />
    <Scene key="president_scene" component={President} title="President" initial={false} type="replace" />
    <Scene key="user_scene" component={User} title="User" initial={false} type="replace" />
  </Scene>,
);

export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes} />
  </ApolloProvider>
);
