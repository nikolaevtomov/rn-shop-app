import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import Fonts from '../../app/utils/fonts';
import {RootStackParamList} from './navigation/types';

interface OwnProps {
  route: RouteProp<RootStackParamList, 'Details'>;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
}

interface DispatchProps {}

type Props = OwnProps & DispatchProps;

const Details: React.FunctionComponent<Props> = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.screen}>
      <Text style={Fonts.jack}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default connect(null, {})(Details);
