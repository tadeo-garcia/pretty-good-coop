import axios from 'axios';

import {
  CART_LOAD_PRODUCTS,
	CART_ADD_PRODUCT,
	CART_REMOVE_PRODUCT,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants';

//////////////ACTIONS/////////////////////
const addProduct = (product) => {
  return{
    type: CART_ADD_PRODUCT,
    product
  }
}

const removeProduct = (product) => {
  return{
    type: CART_REMOVE_PRODUCT,
    product
  }
}

//////////////THUNKS/////////////////////


export const addToCart = (product) => {
  return async (dispatch, getState) => {
    dispatch(addProduct(product))
  
	// dispatch({
	// 	type: CART_ADD_ITEM,
	// 	payload: {
	// 		product: data._id,
	// 		name: data.name,
	// 		image: data.image,
	// 		price: data.price,
	// 		countInStock: data.countInStock,
	// 		qty
	// 	}
	// });

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
}
  

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_PRODUCT,
		payload: id
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

// export const saveShippingAddress = (data) => (dispatch) => {
// 	dispatch({
// 		type: CART_SAVE_SHIPPING_ADDRESS,
// 		payload: data
// 	});

// 	localStorage.setItem('shippingAddress', JSON.stringify(data));
// }

// export const savePaymentMethod = (data) => (dispatch) => {
// 	dispatch({
// 		type: CART_SAVE_PAYMENT_METHOD,
// 		payload: data
// 	});

// 	localStorage.setItem('paymentMethod', JSON.stringify(data));
// }