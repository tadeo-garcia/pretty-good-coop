import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {

  return (
    <header className='navbar__wrapper'>
      <NavLink to='/' className='navbar__logo'></NavLink>
      <div className='navbar__links'>
        <NavLink className='navbar__links-navlink' to='/login'>Login</NavLink>
        <NavLink className='navbar__links-navlink' to='/signup'>Sign Up</NavLink>
      </div>
    </header>
  )
}
