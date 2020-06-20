import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigation from './root-stack-navigation';
import {RootDrawerParamList} from './types';
import Card from '../navigation/card-stack-navigation';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Products" component={StackNavigation} />
    <Drawer.Screen name="Card" component={Card} />
  </Drawer.Navigator>
);

export default RootDrawerNavigation;
