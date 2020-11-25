import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productReducer';

import { cartReducer } from './cartReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer
   
})

export default rootReducer;