import {
  export const LOAD_ORDER = 'LOAD_ORDER';
  export const LOAD_ORDERS_BY_USER = 'LOAD_ORDERS_BY_USER';
  export cosnt LOAD_ORDERS_ALL = 'LOAD_ORDER_ALL'
  export const CREATE_ORDER = 'CREATE_ORDER';
  export const DELETE_ORDER = 'DELETE_ORDER';
} from '../constants/orderConstants';

//////////////ACTIONS/////////////////////
const loadOrderById = (orderId) => {
  return{
    type: LOAD_ORDER,
    orderId
  }
}

const loadOrdersByUser = (userOrders) => {
  return{
    type: LOAD_ORDERS_BY_USER,
    userOrders
  }
}

const loadOrdersAdmin = (orders) => {
  return{
    type: LOAD_ORDERS_ALL,
    orders
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
    dispatch(loadOrderById(orderId))
  }
}

export const loadOrders = (userId) => {
  return async (dispatch) => {
    dispatch(loadOrdersByUser(userId))
  }
}

export const loadOrdersAdmin = (orders) => {
  return async (dispatch) => {
    dispatch(loadOrdersAdmin(orders))
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

