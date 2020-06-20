import React from 'react';
import 'react-native-gesture-handler';
import {Platform, StatusBar} from 'react-native';
import {createStore, combineReducers, AnyAction} from 'redux';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {composeWithDevTools} from 'redux-devtools-extension';
import {NavigationContainer} from '@react-navigation/native';

import {StoreState} from './app/types';
import DrawerNavigation from './app/components/navigation/root-drawer-navigation';
import productsReducer from './app/reducers/products';
import cardReducer from './app/reducers/card';

enableScreens();

const rootReducer = combineReducers<StoreState, AnyAction>({
  products: productsReducer,
  card: cardReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
