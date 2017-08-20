import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './src/store';
import AppWithNavigationState from './src/containers/navigation/AppNavigator';

class Fireburn extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Fireburn', () => Fireburn);

export default Fireburn;
