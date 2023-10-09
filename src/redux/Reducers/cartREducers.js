import * as actionTypes from '../constants/cartConstants';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find((x) => x.product === itemToAdd.product);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existingItem.product ? itemToAdd : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd],
        };
      }

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
