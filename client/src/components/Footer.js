import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {


  return (
    <div id='footerContainer'>
      <div id='footerContainer__left'>
        <div>
          <p className='footerContainer__text' >Copyright © 2020</p>
          <p className='footerContainer__text' >Pretty Good Co-op</p>
        </div>
      </div>
      <div id='footerContainer__middle'>
        <a id='footerContainer__link' href='https://github.com/tadeo-garcia/pretty-good-coop' >
          <i className="fa fa-2x fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <div id='footerContainer__right'>
        <a id='footerContainer__link' href='https://instagram.com/prettygoodco_op' >
          <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}


export default Footer;
