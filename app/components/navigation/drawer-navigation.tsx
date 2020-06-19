import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
// import TabsNavigation from './tab-navigation';
// import FiltersStackNavigation from './filters-stack-navigation';
// import {COLOURS} from '../../utils/colours';
// import Fonts from '../../utils/fonts';
import Products from '../products';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Products" component={StackNavigation} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
