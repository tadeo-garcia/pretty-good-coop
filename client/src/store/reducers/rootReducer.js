import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productReducer';

import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: orderReducer
   
})

export default rootReducer;