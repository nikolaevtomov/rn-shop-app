import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Fonts from '../utils/fonts';
import {ProductProps} from '../types';
import {RootStackParamList} from './navigation/types';

interface OwnProps {
  item: ProductProps;
}

interface StateProps {}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Product = (
  navigation: StackNavigationProp<RootStackParamList>,
): React.FunctionComponent<Props> => ({item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <View style={styles.screen}>
        <Text style={Fonts.jack}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {},
  item: {},
});

export default Product;
