import {ProductProps} from '../types';

export const ADD_TO_CARD = 'ADD_TO_CARD';
export const addToCard = (item: ProductProps) => ({
  type: ADD_TO_CARD,
  payload: item,
});

export const REMOVE_FROM_CARD = 'REMOVE_FROM_CARD';
export const removeFromCard = (item: ProductProps) => ({
  type: REMOVE_FROM_CARD,
  payload: item,
});
