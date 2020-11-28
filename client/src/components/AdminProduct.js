import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminProduct(product){
  return(
    <>
      <div className="adminProductWrapper">
        <img src={product.product.imageUrl} className="adminProductImage"/>
        <h3>{product.product.description}</h3>
        <h3>{product.product.price}</h3>
        <Link  to={`/admin/edit/${product.product.id}`} className="adminProductImage__link adminProductImage__link-animate">edit</Link>
      </div>
    </>
  )
}