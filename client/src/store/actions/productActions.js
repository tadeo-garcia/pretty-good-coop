import axios from "axios";
import Cookies from "js-cookie";

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

export const removeProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId
  }
}

//////////////THUNKS/////////////////////

export const loadProduct = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/products/${id}`)
    let data = await res.json();
    if(res.ok){
      dispatch(getProduct(data.product))
    }
    return res;
  }
}

export const loadProducts = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/products/`)
    let data = await res.json();
    if(res.ok){
      dispatch(getProducts(data.products))
      console.log(data.products)
    }
    return res;
  }
}

export const uploadProduct = (title, description, price, releaseDate, file) =>{
  let formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("releaseDate", releaseDate);
  formData.append("file", file.raw);
  let config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
  return async (dispatch) => {
    const res = await axios.put("/api/products/add", formData, config);
    let product = res.data.product;
    if(product){
      dispatch(postProduct(product))
      // console.log(product)
    }
    return res;
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/producs/${id}`, {
      method: "DELETE",
      headers:{
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      }
    });
    let data = await res.json();
    if(!res.ok) throw res;
    if(res.ok){
      dispatch(removeProduct(id))
    }
  }
}