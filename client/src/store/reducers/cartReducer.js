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
      const idx = action.idx;

      let newCart = [];
      for(let i =0;i<state.cartItems.length;i++){
        if(i!== idx){
          newCart.push(state.cartItems[i])
        }
      }

      console.log(newCart)

			return {
				...state,
				cartItems: newCart
			}
		default:
			return state
	}
}