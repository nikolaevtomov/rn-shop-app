import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Item} from 'react-navigation-header-buttons';

import Card from '../card';
import {HEADER_STYLE} from './root-stack-navigation';
import HeaderButtons from '../header-buttons';
import {COLOURS} from '../../utils/colours';
import {CardStackParamList} from './types';

const Stack = createStackNavigator<CardStackParamList>();

const CardStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => (
          <HeaderButtons {...navigation}>
            <Item
              title="Menu"
              iconSize={30}
              color={COLOURS.white}
              iconName="navicon"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
        ...HEADER_STYLE,
      })}
      name="Card"
      component={Card}
    />
  </Stack.Navigator>
);

export default CardStackNavigation;
