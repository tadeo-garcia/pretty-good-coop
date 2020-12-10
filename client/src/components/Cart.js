import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'
import { loadCartItems } from '../store/actions/cartActions';

export default function Cart(){
  const dispatch = useDispatch();
  const cartItems =useSelector(state=>state.cart.cartItems)

   useEffect(()=>{
     dispatch(loadCartItems())
    }, [dispatch])
    
    
  if(!cartItems) return null;
  
  return(
    <div className="cartWrapper">
      <div className="cartItems">
      {cartItems.map((product, idx)=>{
        return(
          <CartItem product={product} key={idx}/>
        )
      })}
      </div>
      <div className="cartTotals"></div>
    </div>
  )
}