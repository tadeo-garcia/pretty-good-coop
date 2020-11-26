import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { loadProducts } from '../store/actions/productActions';


import Product from "./Product";
import AdminProduct from "./AdminProduct";


export default function ProductDisplay(){
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  let adminDisplay = false;

  useEffect(()=>{
    dispatch(loadProducts());
  }, [dispatch])

  if(currentUserId === 666){
    adminDisplay = true
  }
  return(
    <>
    {adminDisplay ? (
      <div className="displayWrapper">
        <div className="displayBanner"/>
        <div className="displayGrid">
          this is the admin display
        </div>
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