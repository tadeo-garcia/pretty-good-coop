import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminProduct(product){
  let singleProduct = product.product;
  
  return(
    <>
      <div className="adminProductWrapper">
        <img src={singleProduct.imageUrl} 
        className="adminProductImage" alt='adminProduct'/>
        <Link  to={`/admin/edit/${singleProduct.id}`} 
        className="adminProductImage__link adminProductImage__link-animate"
        >edit</Link>
        <div className="adminProduct__description">{singleProduct.description}</div>
        <div className="adminProduct__price">
          ${Math.round((singleProduct.price * 100)/100).toFixed(2)}
        </div>
      </div>
    </>
  )
}