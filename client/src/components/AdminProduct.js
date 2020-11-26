import React from 'react';
import { Redirect } from 'react-router-dom';

export default function AdminProduct(product){
//  console.log(product.product.id)
  return(
    <>
      <div className="adminProductWrapper">
        <img src={product.product.imageUrl} className="adminProductImage"/>
        <h3>{product.product.description}</h3>
        <h3>{product.product.price}</h3>
        <a onClick={()=><Redirect to={`/edit/${product.product.id}`}></Redirect>} href='#' className="adminProductImage__link adminProductImage__link-animate">edit</a>
      </div>
    </>
  )
}