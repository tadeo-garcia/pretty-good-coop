import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { loadProducts } from '../store/actions/productActions';


import Product from "./Product";
import AdminProduct from "./AdminProduct";


export default function ProductDisplay(){
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  const products = useSelector(state=>state.products.list);
  let adminDisplay = false;
  
  useEffect(()=>{
    dispatch(loadProducts());
  }, [dispatch])
  
  if(currentUserId === 666){
    adminDisplay = true
  }

  

  if(!products)return null;
  let productsArray = Array.from(products);

  return(
    <>
    {adminDisplay ? (
      <div className="displayGrid__admin">
        {productsArray.map((product, idx) =>{
          return(
            <AdminProduct product={product} key={idx}/>
          )
        })}
      </div>
    ):(
        <div className="displayGrid__users">
        {productsArray.map((product, idx) =>{
          return(
            <Product product={product} key={idx}/>
          )
        })}
        </div>
    )}
    </>
  )
}