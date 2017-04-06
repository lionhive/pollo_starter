// Set up for Apollo and base scene.
"use strict";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Actions, Router, Scene } from "react-native-router-flux";
import { client, store } from "./store.js";

import SignInEmail from "./components/sign_in_email/container";
import User from "./components/user/container";
import UserProfile from "./components/user_profile/container";
import President from "./container/president";
import Blank from "./scenes/blank";
import Loading from "./scenes/loading";
import Login from "./scenes/login";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="loading" component={Loading} title="Loading" initial={true} type="replace" />
    <Scene key="blank_scene" component={Blank} title="Blank" initial={false} type="replace" />
    <Scene key="profile_scene" component={UserProfile} title="UserProfile" initial={false} hideNavBar={true} type="replace" />
    <Scene key="sign_in_email_scene" component={SignInEmail} title="SignInEmail" initial={false} hideNavBar={true} type="replace" />
    <Scene key="login_scene" component={Login} title="Login" initial={false} hideNavBar={true} type="replace" />
    <Scene key="president_scene" component={President} title="President" initial={false} type="replace" />
    <Scene key="user_scene" component={User} title="User" initial={false} type="replace" />
  </Scene>,
);

export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes} />
  </ApolloProvider>
);
