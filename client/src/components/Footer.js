import React from 'react';

function Footer() {


  return (
    <div id='footerContainer'>
      <div id='footerContainer__left'>
        <div>
          <p className='footerContainer__text' >copyright © 2020</p>
          <p className='footerContainer__text' >pretty good co-op</p>
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
