import React from 'react';
import CartItem from './CartItem'

export default function Cart(){
  
  return(
    <div className="cartWrapper">
      <div className="cartItems">
      <CartItem/>
      <CartItem/>
      <CartItem/>

      </div>
      <div className="cartTotals"></div>
    </div>
  )
}