import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Fonts from '../../app/utils/fonts';
import {COLOURS} from '../../app/utils/colours';
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
      <View style={styles.details}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <View style={styles.infoWrapper}>
          <Text style={{...Fonts.jack, ...styles.title}}>{item.title}</Text>
          <Text style={{...Fonts.jack, ...styles.price}}>
            £{item.price.toFixed(2)}
          </Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button title="View" onPress={() => {}} />
          <Button title="Cart" onPress={() => {}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {},
  details: {
    height: 300,
    margin: 20,
    shadowColor: COLOURS.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    borderRadius: 10,
    backgroundColor: COLOURS.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  infoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
  },
});

export default Product;
