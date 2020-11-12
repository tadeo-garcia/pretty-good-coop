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
      <div className="homepageAbout">
        <div className="homepageAbout__text">
          Try-hard photo booth occupy everyday carry, typewriter hella sartorial narwhal actually echo park af. Tote bag bicycle rights readymade, ramps pickled stumptown mlkshk meggings keffiyeh sriracha gastropub plaid hell of bitters. Ennui bushwick gastropub, man bun tacos single-origin coffee hashtag tbh gentrify mlkshk live-edge ugh taxidermy banjo. Seitan put a bird on it kale chips gochujang photo booth narwhal, keffiyeh plaid williamsburg offal. Kale chips readymade listicle affogato.
          <br/>
          <br/>
          Dummy text? More like dummy thicc text, amirite?
        </div>
      </div>
    </div>
  )
}
