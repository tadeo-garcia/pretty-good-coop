import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../store/actions/authActions'

export default function NavBar() {
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };



  return (
    <div className='navbarContainer'>
      <div className='navbarContainer__links'> 
        {currentUserId === 666 ? (
          <NavLink className='navbarContainer__link' to='/admin'>admin</NavLink>
        ):(
          null
        )}
        <NavLink to='/about' className='navbarContainer__link'>about</NavLink>
        <NavLink to='/shop' className='navbarContainer__link'>shop</NavLink>
        <NavLink to='/contact' className='navbarContainer__link'>contact</NavLink>
        {currentUserId ? (
          <>
            <NavLink to='/cart' className='navbarContainer__link'>cart</NavLink>
            <NavLink className='navbarContainer__link' 
            onClick={handleLogout} to='/'> logout</NavLink>
          </>
            ):(
              <NavLink className='navbarContainer__link' to='/login'>login</NavLink>
        )}
      </div>
    </div>
  )
}

