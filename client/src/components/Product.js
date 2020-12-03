import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(product){
  let singleProduct = product.product;
 
  return(
    <>
      <div className="productWrapper">
        <div className="productImage__wrapper">
          <img src={singleProduct.imageUrl} className="productImage" alt='product'/>
        </div>
        <Link to='/cart'  
        onClick={()=>{console.log(singleProduct.description, singleProduct.price)}}  
        className="productImage__link productImage__link-animate">add to cart</Link>
        <div className="productDescription">{singleProduct.description}</div >
        <div className="productPrice">
          ${Math.round((singleProduct.price * 100)/100).toFixed(2)}
        </div >
      </div>
    </>
  )
}
