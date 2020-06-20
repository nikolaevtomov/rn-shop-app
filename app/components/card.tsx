import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Card: React.FunctionComponent<Props> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text style={Fonts.jack}>Card</Text>
    </View>
  );
};

const mapStateToProps = (state: StoreState): StateProps => ({
  card: state.card,
});

export default connect(mapStateToProps, {})(Card);

const styles = StyleSheet.create({
  screen: {},
});
