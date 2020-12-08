import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(product){
  let singleProduct = product.product;
 
  return(
    <>
      <div className="cartItemWrapper">
        <img src={singlecartItem.imageUrl} 
        className="cartItemImage" alt='cartItem'/>
        <Link to='/cart'  
        onClick={()=>{console.log(singleProduct.description, singleProduct.price)}}  
        className="cartItemImage__link cartItemImage__link-animate">
          add to cart
        </Link>
        <div className="cartItemDescription">
          {singleProduct.description}
        </div >
        <div className="cartItemPrice">
          ${Math.round((singleProduct.price * 100)/100).toFixed(2)}
        </div >
      </div>
    </>
  )
}
