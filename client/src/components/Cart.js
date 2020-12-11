import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'
import { loadCart, removeFromCart } from '../store/actions/cartActions';

export default function Cart({desktop}){
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.cartItems);
  const subtotal = useSelector(state=>state.cart.subTotal);
  const shipping = useSelector(state=>state.cart.shipping)
  let [total, setTotal] = useState(null);

  useEffect(()=>{
     dispatch(loadCart())
    }, [dispatch])
  
  const handleRemoveFromCart = (idx) => {
    dispatch(removeFromCart(idx))
  }

  if(!cartItems) return null;
  
  return(
    <div className="cartWrapper">
      {desktop?(
        <>
          <div className="cartItems">
            {cartItems.length === 0 ? (
              <div className="cartItems__none">no items in your cart</div>
                ):(
                  cartItems.map((product, idx)=>{
                    return(
                      <CartItem 
                        handleRemove={handleRemoveFromCart}
                        product={product} 
                        key={idx} 
                        idx={idx}
                      />
                    )
                  })
                )}
          </div>
          <div className="cartTotals">
            <div className="cartTotals__sub">
              subtotal: ${(((subtotal) * 100)/100).toFixed(2)}
            </div>
            <div className="cartTotals__shipping">
              shipping: { shipping === null ? (
                0.00
                ):(
                <span>${(((shipping) * 100)/100).toFixed(2)}</span>
                )}
            </div>
            <div className="cartTotals__total">
              total: ${(((subtotal+shipping) * 100)/100).toFixed(2)}
            </div>
          </div>
        </>
      ):(
        <>
          <div className="cartItems">
            {cartItems.length === 0 ? (
              <div className="cartItems__none">no items in your cart</div>
                ):(
                  cartItems.map((product, idx)=>{
                    return(
                      <CartItem 
                        product={product} 
                        key={idx}
                        idx={idx}
                        handleRemove={handleRemoveFromCart} 
                      />
                    )
                  })
                )}
          </div>
          <div className="cartTotals">
            <div className="cartTotals__sub">
              subtotal: ${(((subtotal) * 100)/100).toFixed(2)}
            </div>
            <div className="cartTotals__shipping">
              shipping: { shipping === null ? (
                0.00
                ):(
                  <span>${(((shipping) * 100)/100).toFixed(2)}</span>
                )}
            </div>
            <div className="cartTotals__total">
              total: ${(((subtotal+shipping) * 100)/100).toFixed(2)}
              
              {/* {subtotal+shipping} */}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

