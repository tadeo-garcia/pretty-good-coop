import axios from 'axios';

import {
  CART_LOAD,
	CART_ADD_PRODUCT,
	CART_REMOVE_PRODUCT
} from '../constants/cartConstants';

//////////////ACTIONS/////////////////////
const loadCartData = () => {
  return{
    type: CART_LOAD
  }
}

const addProduct = (product) => {
  return{
    type: CART_ADD_PRODUCT,
    product
  }
}

const removeProduct = (idx) => {
  return{
    type: CART_REMOVE_PRODUCT,
    idx
  }
}

//////////////THUNKS/////////////////////
export const loadCart = () => {
  return async (dispatch) => {
    dispatch(loadCartData())
  }
}

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch(addProduct(product))
  }
}
  

export const removeFromCart = (idx) =>{
  return async(dispatch)=> {
    console.log(idx)
  	dispatch(removeProduct(idx));
  }
}

