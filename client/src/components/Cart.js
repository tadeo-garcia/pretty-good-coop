import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartItem from './CartItem'

export default function Cart(){
  const dispatch = useDispatch();

   useEffect(()=>{
     // dispatch(loadProducts());
    }, [dispatch])
    
  let items = localStorage.getItem('cartItems')
    
  if(!items) return null;
  
  let x = JSON.stringify(items)
  console.log(x)
  
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