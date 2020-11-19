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

  console.log(currentUserId)

  return (
    <header className='navbarContainer'>
      <div className='navbarContainer__links'>
        {currentUserId ? (
          <NavLink className='navbarContainer__links-navlink' to='/login'>Login</NavLink>
          
        ):(
        <>
          <NavLink className='navbarContainer__links-navlink' to='/signup'><i className="fas fa-shopping-cart"/></NavLink>
          <NavLink className='navbarContainer__links-navlink' 
          onClick={handleLogout} to='/'> Logout</NavLink>
          </>
        )}
      </div>
      <NavLink to='/' className='navbarContainer__logo'></NavLink>
    </header>
  )
}
