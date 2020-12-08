import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotal(){
  return (
    <div className='cartTotal'>
      
      <Link to='/cart' className='cartTotal__link'>x Items in cart<i class="fa fa-shopping-cart" aria-hidden="true"/></Link>
    </div>
  )
}