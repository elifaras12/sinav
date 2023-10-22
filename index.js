/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/assets/DetailsScreen';



AppRegistry.registerComponent(appName, () => DetailsScreen);

