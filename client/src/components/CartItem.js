import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem(props){
  let singlecartItem = props.product;
  let desktop = props.desktop;
  return(
    <>
      {desktop?(
        <div className="cartItemWrapper">
          <img src={singlecartItem.imageUrl} 
          className="cartItemImage" alt='cartItem'/>
          <div className="cartItemDescription">
            {singlecartItem.description}
            <button className="cartItemRemove">remove item</button>
          </div>
          <div className="cartItemPrice">
            ${Math.round((singlecartItem.price * 100)/100).toFixed(2)}
          </div>
        </div>
     ):(
        <div className="cartItemWrapper">
          <img src={singlecartItem.imageUrl} 
          className="cartItemImage" alt='cartItem'/>
          <div className="cartItemDescription-mobile">
            <div className="cartItemDescription">
              {singlecartItem.description}
            <button className="cartItemRemove">remove item</button>
            </div>
            <div className="cartItemPrice">
              ${Math.round((singlecartItem.price * 100)/100).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
