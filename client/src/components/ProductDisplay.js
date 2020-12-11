import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { loadProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
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
            <Product handleAddToCart={handleAddToCart} product={product} key={idx}/>
          )
        })}
        </div>
    )}
    </>
  )
}