import React from 'react';
import 'react-native-gesture-handler';
import {Platform, StatusBar} from 'react-native';
import {createStore, combineReducers, AnyAction} from 'redux';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {composeWithDevTools} from 'redux-devtools-extension';

import {StoreState} from './app/types';
import DrawerNavigation from './app/components/navigation/drawer-navigation';

enableScreens();

const rootReducer = combineReducers<StoreState, AnyAction>({
  products: [],
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    </>
  );
};

export default App;
