import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import Product from './product';
import {StoreState, ProductProps} from '../types';
// import Fonts from '../utils/fonts';

interface OwnProps {
  navigation: any;
}

interface StateProps {
  products: Array<ProductProps>;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const Products: React.FunctionComponent<Props> = ({products, navigation}) => {
  return (
    <FlatList
      data={products}
      renderItem={Product(navigation)}
      keyExtractor={(item: ProductProps) => item.id}
    />
  );
};

const mapStateToProps = (state: StoreState): StateProps => ({
  products: state.products,
});

export default connect(mapStateToProps, {})(Products);
