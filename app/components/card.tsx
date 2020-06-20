import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {StoreState, ProductProps} from '../types';
import Fonts from '../utils/fonts';
import {RootDrawerParamList} from './navigation/types';

interface OwnProps {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Card'>;
}

interface StateProps {
  card: Array<ProductProps>;
  total: number;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Card: React.FunctionComponent<Props> = ({total}) => {
  return (
    <View style={styles.screen}>
      <Text style={Fonts.jack}>Total: £{total}</Text>
      <View style={styles.buttonsWrapper}>
        <Button title="Order now" onPress={() => {}} />
        <Button title="Clear card" onPress={() => {}} />
      </View>
    </View>
  );
};

const mapStateToProps = (state: StoreState): StateProps => ({
  card: state.card,
  total: state.card.reduce((acc: number, curr: ProductProps) => {
    return acc + curr.price;
  }, 0),
});

export default connect(mapStateToProps, {})(Card);

const styles = StyleSheet.create({
  screen: {},
  buttonsWrapper: {},
});
