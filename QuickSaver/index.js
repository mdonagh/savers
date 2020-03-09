import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';

import reducers from './src/reducers';

import App from './App';
import {name as appName} from './app.json';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
