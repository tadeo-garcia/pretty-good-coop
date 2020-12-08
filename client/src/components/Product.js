import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(product, handleAddToCart){
  let singleProduct = product.product;
 
  return(
    <>
      <div className="productWrapper">
        <img src={singleProduct.imageUrl} 
        className="productImage" alt='product'/>
        <button  
        onClick={()=>handleAddToCart(singleProduct)}  
        className="productImage__link productImage__link-animate">
          add to cart
        </button>
        <div className="productDescription">
          {singleProduct.description}
        </div >
        <div className="productPrice">
          ${Math.round((singleProduct.price * 100)/100).toFixed(2)}
        </div >
      </div>
    </>
  )
}
