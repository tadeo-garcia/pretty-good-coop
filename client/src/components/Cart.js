import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'
import { loadCart, removeFromCart } from '../store/actions/cartActions';

export default function Cart({desktop}){
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.cartItems);
  const subtotal = useSelector(state=>state.cart.subTotal);
  const shipping = useSelector(state=>state.cart.shipping)
  // let [shipping, setShipping] = useState(null);
  let [total, setTotal] = useState(null);

  useEffect(()=>{
     dispatch(loadCart())
    //  setShipping(cartItems.length*5)
    }, [dispatch])
  
  const handleRemoveFromCart = (idx) => {
    dispatch(removeFromCart(idx))
    // console.log(product)
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
                        handleRemoveFromCart={handleRemoveFromCart}
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
              total: ${(subtotal+shipping)}
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
              total: {subtotal+shipping}
            </div>
          </div>
        </>
      )}


      {/* <div className="cartItems">
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
          total: {subtotal+shipping}
        </div>
      </div> */}

    </div>
  )
}

