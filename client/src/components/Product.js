import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({url,description,price}){
 
  return(
    <>
      <div className="productWrapper">
        <img src={url} className="productImage" alt='product'/>
        <h3>{description}</h3>
        <h3>{price}</h3>
        <Link to='/cart'  onClick={()=>{console.log(description, price)}}  className="productImage__link productImage__link-animate">Add To Cart</Link>
      </div>
    </>
  )
}