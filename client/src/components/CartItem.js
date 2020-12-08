import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem(product){
  let singlecartItem = product.product
 
  return(
    <>
      <div className="cartItemWrapper">
        {/* <img src={singlecartItem.imageUrl} 
        className="cartItemImage" alt='cartItem'/>
        <Link to='/cart'  
        onClick={()=>{console.log(singlecartItem.description, singlecartItem.price)}}  
        className="cartItemImage__link cartItemImage__link-animate">
          add to cart
        </Link>
        <div className="cartItemDescription">
          {singlecartItem.description}
        </div >
        <div className="cartItemPrice">
          ${Math.round((singlecartItem.price * 100)/100).toFixed(2)}
        </div > */}
      </div>
    </>
  )
}
