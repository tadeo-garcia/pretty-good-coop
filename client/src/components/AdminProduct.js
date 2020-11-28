import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminProduct(product){
  let singleProduct = product.product;
  
  return(
    <>
      <div className="adminProductWrapper">
        <img src={singleProduct.imageUrl} className="adminProductImage"/>
        <h3>{singleProduct.description}</h3>
        <h3>{singleProduct.price}</h3>
        <Link  to={`/admin/edit/${singleProduct.id}`} className="adminProductImage__link adminProductImage__link-animate">edit</Link>
      </div>
    </>
  )
}