import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './stack-navigation';
import {RootDrawerParamList} from './types';

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Products" component={StackNavigation} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
