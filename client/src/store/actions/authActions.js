import {
  SET_USER,
  LOGOUT_USER
} from '../constants/authConstants'

////////////////////ACTIONS////////////////////

export const setUser = (user) => {
  if(!user){
    return {
      type: SET_USER,
      user: {}
    }
  }
  return {
    type: SET_USER,
    user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

////////////////////THUNKS////////////////////

export const login = (email, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
    res.data = await res.json();
    if (res.ok) { 
      dispatch(setUser(res.data.user))
    }
    return res;
  }
}

export const signup = (username, email, password) => {
  return async dispatch => {
    const res = await fetch('/api/users/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password })
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  }
}



export const logout = () => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'delete',
      headers: { },
    })
    if (res.ok) {
      dispatch(logoutUser());
    }
    return res;
  }
}