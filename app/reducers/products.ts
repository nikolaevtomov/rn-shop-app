const initialState: Array<string> = [];

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ANY': {
      return state;
    }

    default:
      return initialState;
  }
};

export default productsReducer;
