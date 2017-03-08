import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import { ApolloProvider } from 'react-apollo'

import President from './components/President.js'
import User from './components/User.js'

import { client, store } from './store.js'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='president' component={President} title='President' initial={true} type='replace' />
    <Scene key='user' component={User} title='User' initial={true} type='replace' />
  </Scene>
)

export const routes = (
  <ApolloProvider store={store} client={client}>
    <Router scenes={scenes}/>
  </ApolloProvider>
)