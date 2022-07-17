import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux'
import store from './src/store'

//import Login from './src/pages/Login';
//mport Type from './src/pages/Staps/type';
//import Driver from './src/pages/Staps/Driver';
//import Client from './src/pages/Staps/Client';
//import Store from './src/pages/Staps/Store';
//import Ride from './src/pages/Ride';
import Home from './src/pages/Home';

const App = ()=>(
    <Provider store={store}>
        <Home />
    </Provider>
)

AppRegistry.registerComponent(appName, App );
