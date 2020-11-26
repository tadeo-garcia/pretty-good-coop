import React from 'react';

export default function AdminProduct({url,description,price}){
 
  return(
    <>
      <div className="productWrapper">
        <img src={url} className="productImage"/>
        <h3>{description}</h3>
        <h3>{price}</h3>
        <a onClick={()=>{console.log(description, price)}} href='#' className="productImage__link productImage__link-animate">Add To Cart</a>
      </div>
    </>
  )
}