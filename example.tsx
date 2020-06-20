import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

import {StoreState} from './app/types';
import Fonts from './app/utils/fonts';

interface OwnProps {}

interface StateProps {
  products: any;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Example: React.FunctionComponent<Props> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text style={Fonts.jack}>Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

const mapStateToProps = (state: StoreState): StateProps => ({
  products: state.products,
});

export default connect(mapStateToProps, {})(Example);
