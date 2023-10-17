import axios from 'axios';
import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
    console.log('Fetched Product Data:', data);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cartItems } = getState().cart;

  const existingItem = cartItems?.find((item) => item.product === productId);

  if (!existingItem) {
    return;
  }

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: productId,
  });
};
