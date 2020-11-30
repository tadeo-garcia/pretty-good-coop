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
        <img src={singleProduct.imageUrl} className="adminProductImage" alt='adminProduct'/>
        <h3>{singleProduct.description}</h3>
        <h3>{singleProduct.price}</h3>
        <Link  to={`/admin/edit/${singleProduct.id}`} 
        className="adminProductImage__link adminProductImage__link-animate"
        // onClick={load(singleProduct.id)}
        >edit</Link>
      </div>
    </>
  )
}