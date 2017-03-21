// Set up for Apollo and base scene.
"use strict";
import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { ApolloProvider } from 'react-apollo';
import { client, store } from './store.js';

import Blank from './scenes/blank.js';
import President from './container/president.js';
import User from './components/user/container.js';
import Login from './scenes/login';


const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login_scene' component={Login} title='Login' initial={true} hideNavBar={true} type='replace' />    
    <Scene key='blank_scene' component={Blank} title='Blank' initial={false} type='replace' />
    <Scene key='president_scene' component={President} title='President' initial={false} type='replace' />
    <Scene key='user_scene' component={User} title='User' initial={false} type='replace' />
  </Scene>
)

export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes}/>
  </ApolloProvider>
)