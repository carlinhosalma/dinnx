import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import Login from './src/pages/Login';
//mport Type from './src/pages/Staps/type';
//import Driver from './src/pages/Staps/Driver';
import Client from './src/pages/Staps/Client';
//import Store from './src/pages/Staps/Store';

AppRegistry.registerComponent(appName, () => Client);
