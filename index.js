/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import configStore from './src/Store/store'
import {name as appName} from './app.json';
const store = configStore
const ReduxProvider =  () => (
     <Provider store = {store}>
         <App />
     </Provider>
)
AppRegistry.registerComponent(appName, () => ReduxProvider);