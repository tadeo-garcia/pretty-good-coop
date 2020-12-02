import React from 'react';
import { NavLink} from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

export default function UserPage() {

  return (
    <>
    <div className='userpageContainer'>
      <div className='userpageBanner'>
        <div className="userpageBanner__credit">
          white rock lake - east dallas, 2019
          <br/>
          35mm film on nikon lite•touch zoom 120ed
          <br/>
          by tadeo garcia
        </div>
        <NavLink to='/'><div className='userpageBanner__logo'/></NavLink>  
      </div>
      <NavBar/>
      <Dashboard/>
    {/* <Footer/> */}
    </div>
    </>
  )
}
