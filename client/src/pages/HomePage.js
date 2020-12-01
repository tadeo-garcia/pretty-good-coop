import React from 'react';
import {NavLink} from 'react-router-dom';

export default function HomePage() {


  return (
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
    </div>
  )
}
