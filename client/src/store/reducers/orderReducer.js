import {
  export const LOAD_ORDER = 'LOAD_ORDER';
  export const LOAD_ORDERS_BY_USER = 'LOAD_ORDERS_BY_USER';
  export cosnt LOAD_ORDERS_ALL = 'LOAD_ORDER_ALL'
  export const CREATE_ORDER = 'CREATE_ORDER';
  export const DELETE_ORDER = 'DELETE_ORDER';
} from '../constants/orderConstants';

export const orderReducer = (
	state = { userOrders: [], 
	action
) => {
	switch (action.type) {
    case LOAD_ORDER:
      return {...state}
		case LOAD_ORDERS_BY_USER:
      return {...state}
		case LOAD_ORDERS_ALL:
      return {...state}
    case CREATE_ORDER:
      return {...state}
    case DELETE_ORDER:
			return {...state}
		default:
			return state
	}
}