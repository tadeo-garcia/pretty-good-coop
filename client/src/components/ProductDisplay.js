import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { loadProducts } from '../store/actions/productActions';


import Product from "./Product";
import AdminProduct from "./AdminProduct";


export default function ProductDisplay(){
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  const products = useSelector(state=>state.products);
  let adminDisplay = false;

  useEffect(()=>{
    dispatch(loadProducts());
  }, [dispatch])

  if(currentUserId === 666){
    adminDisplay = true
  }
  if(!products)return null;

  console.log(typeof products)
  return(
    <>
    {adminDisplay ? (
      <div className="displayGrid__admin">
        {Array.from(products).map((product, idx) =>{
          return(
            <AdminProduct product={product}/>
          )
        })}
      </div>
    ):(
      <div className="displayWrapper">
        <div className="displayBanner"/>
        <div className="displayGrid">
          this is the pleebs display
        </div>
      </div>
    )}
    </>
  )
}