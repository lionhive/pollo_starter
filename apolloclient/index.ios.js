import { AppRegistry } from 'react-native'
import { routes } from './src/client'

AppRegistry.registerComponent('apolloclient', () => () => routes)