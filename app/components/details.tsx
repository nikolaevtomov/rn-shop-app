import React from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
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
    <View style={styles.details}>
      <Image source={{uri: item.imageUrl}} />
      <Text style={Fonts.jack}>{item.title}</Text>
      <Text style={Fonts.jack}>{item.price}</Text>
      <View style={styles.buttonsWrapper}>
        <Button title="View Details" onPress={() => {}} />
        <Button title="Cart" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {},
  buttonsWrapper: {},
});

export default connect(null, {})(Details);
