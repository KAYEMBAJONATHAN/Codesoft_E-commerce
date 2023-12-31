import axios from 'axios';
import * as actionTypes from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get('http://localhost:5000/api/v1/products');
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
