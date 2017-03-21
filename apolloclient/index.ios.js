import { AppRegistry } from 'react-native'
import { routes } from './build/client'

AppRegistry.registerComponent('apolloclient', () => () => routes)