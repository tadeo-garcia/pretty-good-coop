import React from 'react';
import { useDispatch } from 'react-redux';
import { loadProduct } from '../store/actions/productActions';
import { Link } from 'react-router-dom';

export default function AdminProduct(product){
  const dispatch = useDispatch()
  let singleProduct = product.product;
  
  // const load = (productId) => {
  //   dispatch(loadProduct(productId))
  // };

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