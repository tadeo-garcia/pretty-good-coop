import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { loadProducts } from '../store/actions/productActions';


import Product from "./Product";
import AdminProduct from "./AdminProduct";


export default function ProductDisplay(){
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  const products = useSelector(state=>state.products.list)
  let adminDisplay = false;

  useEffect(()=>{
    dispatch(loadProducts());
  }, [dispatch])

  if(currentUserId === 666){
    adminDisplay = true
  }
  if(!products)return null;
  return(
    <>
    {adminDisplay ? (
      <div className="displayGrid">
        {products.map((product, idx) =>{
          return(
            <div>
              {product.title}
            </div>
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