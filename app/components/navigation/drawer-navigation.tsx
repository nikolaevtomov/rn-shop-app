import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Products from '../products';
import Details from '../details';
import {RootStackParamList, RootDrawerParamList} from '../navigation/types';

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Products" component={StackNavigation} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
