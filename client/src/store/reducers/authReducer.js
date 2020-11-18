import {
  SET_USER,
  LOGOUT_USER
} from '../constants/authConstants'

export default function authReducer(state = {}, action) {
  // Object.freeze(state)
  switch (action.type) {
    case SET_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
