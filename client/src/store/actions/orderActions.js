import {
  export const LOAD_ORDER = 'LOAD_ORDER';
  export const CREATE_ORDER = 'CREATE_ORDER';
  export const DELETE_ORDER = 'DELETE_ORDER';
} from '../constants/orderConstants';

//////////////ACTIONS/////////////////////
const loadOrderData = (orderId) => {
  return{
    type: LOAD_ORDER,
    orderId
  }
}

const addOrder = (order) => {
  return{
    type: CREATE_ORDER,
    order
  }
}

const deleteOrderByIdx = (orderId) => {
  return{
    type: DELETE_ORDER,
    orderId
  }
}

//////////////THUNKS/////////////////////
export const loadOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(loadOrderData(orderId))
  }
}

export const createOrder = (order) => {
  return async (dispatch) => {
    dispatch(addOrder(order))
  }
}
  

export const deleteOrder = (orderId) =>{
  return async(dispatch)=> {
    console.log(orderId)
  	dispatch(removeProduct(orderId));
  }
}

