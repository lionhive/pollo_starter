"use strict";

import React from "react";

import SignInEmail from "../components/sign_in_email_fancy/component";
import User from "../components/user/container";
import UserProfile from "../components/user_profile/container";
import President from "../container/president";
import Blank from "./blank";
import Loading from "./loading";
import SignUp from "./sign_up";

import { StackNavigator } from "react-navigation";
import { AppDrawerNavigator } from "./drawer_navigator";
import { AppTabNavigator } from "./tab_navigator";

const AppNavigator = StackNavigator({
  Blank: { screen: Blank },
  Loading: { screen: Loading },
  President: { screen: President },
  SignInEmail: { screen: SignInEmail },
  SignUpScene: { screen: SignUp },
  User: { screen: User },
  UserProfile: { screen: UserProfile },

  // Experimental
  //DrawerDemo: { screen: AppDrawerNavigator },
  TabDemo: { screen: AppTabNavigator },
});

export default AppNavigator;
