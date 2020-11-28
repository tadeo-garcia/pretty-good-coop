import {
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from '../constants/productConstants';


export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, list: action.products};
    case LOAD_PRODUCT:
      return { ...state, single: action.product };
    case DELETE_PRODUCT:
      return state.users.filter((data, i) => i !== action.productId - 1);
    case ADD_PRODUCT:
      return { ...state, ...action.newProduct };
    case EDIT_PRODUCT:
      return { ...state, single: action.product}
    default:
      return state;
  }
}
