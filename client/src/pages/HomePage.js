import React from 'react';
import {NavLink} from 'react-router-dom';

export default function HomePage() {


  return (
    <div className="homepageContainer">
      <div className="homepageBanner">
        <NavLink to="/Dashboard" className='homepageBanner__nav'>
          <div className='homepageBanner__logo'></div>
        </NavLink>
      </div>
    </div>
  )
}
