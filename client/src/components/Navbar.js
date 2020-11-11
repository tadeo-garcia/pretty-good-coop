import React from 'react';
import NavLink from 'react-router-dom';

export default function NavBar() {

  return (
    <header className='navbar__wrapper'>
      <div className='navbar__logo'/>
      <div className='navbar__links'>
        <NavLink  to='/login'></NavLink>
        <NavLink  to='/login'></NavLink>
      </div>
    </header>
  )
}
