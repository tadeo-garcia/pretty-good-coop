import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotal(){
  return (
    <div className='cartTotal'>
      
      <Link to='/cart' className='cartTotal__link'>x Items in cart<i className="fa fa-shopping-cart" aria-hidden="true"/></Link>
    </div>
  )
}