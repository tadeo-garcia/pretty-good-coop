import React from 'react';

export default function AdminProduct(product){
 console.log(product)
  return(
    <>
      <div className="adminProductWrapper">
        <img src={product.product.imageUrl} className="adminProductImage"/>
        <h3>{product.product.description}</h3>
        <h3>{product.product.price}</h3>
        <a onClick={()=>{console.log(product.description, product.price)}} href='#' className="adminProductImage__link adminProductImage__link-animate">edit</a>
      </div>
    </>
  )
}