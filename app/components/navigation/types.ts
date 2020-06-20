import {ProductProps} from '../../types';

export type RootStackParamList = {
  Products: undefined;
  Details: {item: ProductProps};
};

export type RootDrawerParamList = {
  Products: undefined;
  Card: undefined;
};

export type CardStackParamList = {
  Card: undefined;
};
