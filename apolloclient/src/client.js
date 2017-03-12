// Set up for Apollo and base scene.
"use strict";
import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import { ApolloProvider } from 'react-apollo'
import { client, store } from './store.js'


import Blank from './screens/blank.js'
import President from './container/president.js'
import User from './container/user.js'


const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='president' component={President} title='President' initial={true} type='replace' />
    <Scene key='user' component={User} title='User' initial={true} type='replace' />
    <Scene key='blank' component={Blank} title='Blank' initial={true} type='replace' />
  </Scene>
)

export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes}/>
  </ApolloProvider>
)