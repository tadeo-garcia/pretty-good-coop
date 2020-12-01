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
    // <header className='navbarContainer'>
    //   <div className='navbarContainer__links'>
    //     {currentUserId === 666 ? (
    //       <NavLink className='navbarContainer__links-navlink' to='/admin'>admin</NavLink>
    //     ):(
    //       null
    //     )}
    //     {currentUserId ? (
    //     <>
    //       <NavLink className='navbarContainer__links-navlink' to='/signup'><i className="fas fa-shopping-cart" style={admin}/></NavLink>
    //       <NavLink className='navbarContainer__links-navlink' 
    //       onClick={handleLogout} to='/'> logout</NavLink>
    //       </>
          
    //       ):(
    //         <NavLink className='navbarContainer__links-navlink' to='/login'>login</NavLink>
    //     )}
    //   </div>
    // </header>

    <div className='navbarContainer'>
      <div className='navbarContainer__links'> 
        <NavLink to='/about' className='navbarContainer__link'>about</NavLink>
        <a href='https://coprettygoodop.bigcartel.com' className='navbarContainer__link'>shop</a>
        <NavLink to='/members' className='navbarContainer__link'>members</NavLink>
        <NavLink to='/contact' className='navbarContainer__link'>contact</NavLink>
      </div>
    </div>
  )
}

