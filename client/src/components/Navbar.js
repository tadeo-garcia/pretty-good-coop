import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../store/actions/authActions'

export default function NavBar() {
  const [admin, setAdmin] = useState({display: 'inline'})
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  // if(currentUserId===666){
  //   setAdmin({display:'none'})
  // }

  return (
    <header className='navbarContainer'>
      <div className='navbarContainer__links'>
        {currentUserId === 666 ? (
          <NavLink className='navbarContainer__links-navlink' to='/admin'>Admin</NavLink>
        ):(
          null
        )}
        {currentUserId ? (
        <>
          <NavLink className='navbarContainer__links-navlink' to='/signup'><i className="fas fa-shopping-cart" style={admin}/></NavLink>
          <NavLink className='navbarContainer__links-navlink' 
          onClick={handleLogout} to='/'> Logout</NavLink>
          </>
          
          ):(
            <NavLink className='navbarContainer__links-navlink' to='/login'>Login</NavLink>
        )}
      </div>
      <NavLink to='/' className='navbarContainer__logo'></NavLink>
    </header>
  )
}

