import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'
import { loadCartItems } from '../store/actions/cartActions';

export default function Cart(){
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.cartItems);
  const subtotal = useSelector(state=>state.cart.subTotal);
  let [shipping, setShipping] = useState(null);
  let [total, setTotal] = useState(null);



   useEffect(()=>{
     dispatch(loadCartItems())
    }, [dispatch])
    
  if(!cartItems) return null;
  
  return(
    <div className="cartWrapper">
      <div className="cartItems">
      {cartItems.length === 0 ? (
       <div className="cartItems__none">no items in your cart</div>
      ):(
        cartItems.map((product, idx)=>{
          return(
            <CartItem product={product} key={idx}/>
          )
        })
      )}
      </div>
      <div className="cartTotals">
        <div className="cartTotals__sub">
          subtotal: {subtotal}
        </div>
        <div className="cartTotals__shipping">
          shipping: { shipping === null ? (
            0.00
          ):(
            shipping
          )}
        </div>
        <div className="cartTotals__total">
          total: {total}
        </div>
      </div>
    </div>
  )
}