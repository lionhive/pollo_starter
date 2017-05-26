import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";

import AppNavigator from "../../scenes/stack_navigator";

interface IProps {
  dispatch: any;
  nav: any;
};
interface IState { };

class App extends React.Component<IProps, IState>  {
  public render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

export default App;
