import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {StoreState} from '../types';
import Fonts from '../utils/fonts';

interface OwnProps {}

interface StateProps {
  products: any;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Products: React.FunctionComponent<Props> = ({products}) => {
  return (
    <View style={styles.screen}>
      <Text style={Fonts.jack}>Example</Text>
      {/* <FlatList data={products} renderItem /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

const mapStateToProps = (state: StoreState): StateProps => ({
  products: state.products,
});

export default connect(mapStateToProps, {})(Products);
