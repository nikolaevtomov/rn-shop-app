import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Products from '../products';
import Details from '../details';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default StackNavigation;
