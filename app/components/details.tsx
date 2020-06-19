import React from 'react';
import {View, ScrollView, StyleSheet, Text, Image, Button} from 'react-native';
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
    <ScrollView>
      <Image style={styles.image} source={{uri: item.imageUrl}} />

      <View style={styles.details}>
        <View style={styles.buttonsWrapper}>
          <Button title="Add to card" onPress={() => {}} />
        </View>

        <Text style={{...Fonts.jack, ...styles.price}}>
          £{item.price.toFixed(2)}
        </Text>

        <Text style={{...Fonts.jack, ...styles.description}}>
          {item.description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  buttonsWrapper: {},
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
  },
});

export default connect(null, {})(Details);
