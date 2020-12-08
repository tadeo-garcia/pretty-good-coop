import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import NavBar from '../components/Navbar';
import NavBarMobile from '../components/NavbarMobile'
import Dashboard from '../components/Dashboard';

export default function UserPage() {

  const [desktop, setDesktop] = useState(window.innerWidth > 900)

  const updateScreen = ()=>{
    setDesktop(window.innerWidth>900)
  }
  
  useEffect( () => {
    window.addEventListener('resize', updateScreen)
    return () => window.removeEventListener('resize', updateScreen)
  })


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
      {desktop?(
        <NavBar/>
      ):(
        <NavBarMobile/>
      )}
      <Dashboard/>
    </div>
    </>
  )
}
