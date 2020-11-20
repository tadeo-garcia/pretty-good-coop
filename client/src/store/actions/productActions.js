import {
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from '../constants/productConstants';

//////////////ACTIONS/////////////////////
export const getProduct = (product) => {
  return {
    type: LOAD_PRODUCT,
    product
  }
}

export const getProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
}

export const postProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId
  }
}

//////////////THUNKS/////////////////////
