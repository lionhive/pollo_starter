"use strict";

import React from "react";
import { Actions, Scene } from "react-native-router-flux";

import SignInEmail from "../components/sign_in_email_fancy/component";
import User from "../components/user/container";
import UserProfile from "../components/user_profile/container";
import President from "../container/president";

import Blank from "./blank";
import Loading from "./loading";
import SignUp from "./sign_up";

export default Actions.create(
  <Scene key="root">
    <Scene key="loading" component={Loading} title="Loading" initial={true} type="replace" />
    <Scene key="blank_scene" component={Blank} title="Blank" initial={false} type="replace" />
    <Scene key="sign_up_scene" component={SignUp} title="SignUpScene" initial={false} hideNavBar={true} type="replace" />
    <Scene key="profile_scene" component={UserProfile} title="UserProfile" initial={false} hideNavBar={true} type="replace" />
    <Scene key="sign_in_email_scene" component={SignInEmail} title="SignInEmail" initial={false} hideNavBar={true} type="replace" />
    <Scene key="login_scene" component={SignInEmail} title="Login" initial={false} hideNavBar={true} type="replace" />
    <Scene key="president_scene" component={President} title="President" initial={false} type="replace" />
    <Scene key="user_scene" component={User} title="User" initial={false} type="replace" />
  </Scene>,
);