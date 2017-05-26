// Set up for Apollo and base scene.
"use strict";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-native-router-flux";
import AppNavigator from "./scenes/stack_navigator";
import { client, store } from "./store";

import Blank from "./scenes/blank";
import AppWithNavigationState from "./systems/navigation/react_navigation";
console.log("AppWithNavigationState is ", AppWithNavigationState);
interface IProps {};
interface IState {};

class Root extends React.Component<IProps, IState> {
  public render() {
    return (
      <ApolloProvider store={store} client={client}>
        <AppWithNavigationState />
      </ApolloProvider>
    );
}}

export default Root;
