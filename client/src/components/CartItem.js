import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem(props){
  let singlecartItem = props.product;
  let idx = props.idx;
  let handleRemove = props.handleRemove;

  return (
    <div className="cartItemWrapper">
      <img src={singlecartItem.imageUrl} 
      className="cartItemImage" alt='cartItem'/>
      <div className="cartItemDescription">
        {singlecartItem.description}
      <div className="cartItemPrice">
        ${((singlecartItem.price * 100)/100).toFixed(2)}
      </div>
        <button 
        className="cartItemRemove"
        onClick={()=>handleRemove(idx)}
        >remove item</button>
      </div>
    </div>
  )
}
