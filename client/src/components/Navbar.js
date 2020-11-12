import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {

  return (
    <header className='navbarContainer'>
      <div className='navbarContainer__links'>
        <NavLink className='navbarContainer__links-navlink' to='/login'>Login</NavLink>
        <NavLink className='navbarContainer__links-navlink' to='/signup'>Sign Up</NavLink>
        <NavLink className='navbarContainer__links-navlink' to='/signup'>Cart</NavLink>
      </div>
      <NavLink to='/' className='navbarContainer__logo'></NavLink>
    </header>
  )
}
