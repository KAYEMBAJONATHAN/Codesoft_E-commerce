import axios from 'axios';
import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/products/${id}`);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        productId: data._id, // Changed variable name to 'productId'
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems)); // Corrected 'Json' to 'JSON'
  } catch (error) {
    console.error(error); // Handle errors appropriately
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
