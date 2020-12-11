import {
  CART_LOAD,
	CART_ADD_PRODUCT,
	CART_REMOVE_PRODUCT
} from '../constants/cartConstants';

export const cartReducer = (
	state = { cartItems: [], subTotal: 0 },
	action
) => {
	switch (action.type) {
    case CART_LOAD:
      if (state.cartItems.length===0) return {...state}
      let subTotal = state.cartItems.map(item=>{
        return item.price
      }).reduce((prev,next)=> prev + next)

      return {...state, cartItems: state.cartItems, subTotal: subTotal}
		case CART_ADD_PRODUCT:
      const item = action.product;
      return{...state, cartItems:[...state.cartItems,item]}
		case CART_REMOVE_PRODUCT:
			return {
				...state,
				cartItems: state.cartItems.filter(x => x.product !== action.payload)
			}
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload
			}
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload
			}
		default:
			return state
	}
}