import {ProductProps} from '../types';
import {ADD_TO_CARD, REMOVE_FROM_CARD} from '../actions';

const initialState: Array<ProductProps> = [];

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return state.concat(action.payload);
    }

    case REMOVE_FROM_CARD: {
      if (state.some((item: ProductProps) => item.id === action.payload.id)) {
        return [
          ...state.filter(
            (item: ProductProps) => item.id !== action.payload.id,
          ),
        ];
      } else {
        return state;
      }
    }

    default:
      return initialState;
  }
};

export default cardReducer;
