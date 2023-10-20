import * as actionTypes from '../constants/cartConstants';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      let existItem;
      if (state.cartItems) existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      }
      if (state.cartItems) {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      return {
        ...state,
        cartItems: [item],
      };
    case actionTypes.REMOVE_FROM_CART:
      const productIdToRemove = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== productIdToRemove),
      };

    default:
      return state;
  }
};

export default cartReducer;
