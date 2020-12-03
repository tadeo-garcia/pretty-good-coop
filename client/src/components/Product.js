import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(product){
  let singleProduct = product.product;
 
  return(
    <>
      <div className="productWrapper">
        <img src={singleProduct.imageUrl} className="productImage" alt='product'/>
        <h3>{singleProduct.description}</h3>
        <h3>{singleProduct.price}</h3>
        <Link to='/cart'  
        onClick={()=>{console.log(singleProduct.description, singleProduct.price)}}  
        className="productImage__link productImage__link-animate">Add To Cart</Link>
      </div>
    </>
  )
}
