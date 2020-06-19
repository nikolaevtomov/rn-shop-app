import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Products from '../products';
import {COLOURS} from '../../utils/colours';
import Fonts from '../../utils/fonts';
import Details from '../details';
import {RootStackParamList} from './types';

const HEADER_STYLE = {
  headerStyle: {
    backgroundColor: COLOURS.ternary,
  },
  headerTintColor: COLOURS.white,
  headerTitleStyle: {
    ...Fonts.grand,
    fontSize: 32,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={() => ({
        ...HEADER_STYLE,
      })}
      name="Products"
      component={Products}
    />
    <Stack.Screen
      name="Details"
      options={({route}) => ({
        headerTitle: route.params.item.title,
        headerBackTitleVisible: false,
        headerRight: () => <Text>'HI'</Text>,
        ...HEADER_STYLE,
      })}
      component={Details}
    />
  </Stack.Navigator>
);

export default StackNavigation;
