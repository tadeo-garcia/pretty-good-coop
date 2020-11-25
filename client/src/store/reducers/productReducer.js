import {
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from '../constants/productConstants';


export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, list: action.photos };
    case LOAD_PRODUCT:
      return { ...state, single: action.photo };
    case DELETE_PRODUCT:
      return state.users.filter((data, i) => i !== action.photoId - 1);
    case ADD_PRODUCT:
      return { ...state, ...action.newPhoto };
    default:
      return state;
  }
}
