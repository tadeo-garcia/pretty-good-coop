import React from 'react';

export default function Product({url,description,price}){
  console.log(description)
  console.log(price)
  console.log(url)
  return(
    <>
      <div className="productWrapper">
        <img src={url} className="productImage"/>
        <h3>{description}</h3>
        <h3>{price}</h3>
        <a href='#'>Add To Cart</a>
      </div>
    </>
  )
}