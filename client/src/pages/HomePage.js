import React , { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
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
    <div className='homepageContainer'>
      <div className='homepageBanner'>
        <div className="homepageBanner__credit">
          white rock lake - east dallas, 2019
          <br/>
          35mm film on nikon lite•touch zoom 120ed
          <br/>
          by tadeo garcia
        </div>
        <NavLink to='/'><div className='homepageBanner__logo'/></NavLink>  
      </div>
      <NavBar/>
      <div className="homepageContent">
          {desktop ? (
          <div className="homepageContent__Desktop">
            <div className="homeSpinner"/>
            <div className="homeSpinner"/>
            <div className="homeSpinner"/>
          </div>
        ):(
          <div className="homepageContent__Mobile">
            <div className="homeSpinner"/>
          </div>
        )}
      </div>
    <Footer/>
    </div>
    </>
  )
}
