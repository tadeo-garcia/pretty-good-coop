import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem(props){
  let singlecartItem = props.product;
  let desktop = props.desktop;
  return (
    <div className="cartItemWrapper">
      <img src={singlecartItem.imageUrl} 
      className="cartItemImage" alt='cartItem'/>
      <div className="cartItemDescription">
        {singlecartItem.description}
      <div className="cartItemPrice">
        ${Math.round((singlecartItem.price * 100)/100).toFixed(2)}
      </div>
        <button className="cartItemRemove">remove item</button>
      </div>
    </div>
  )
}
