import React from 'react';
import Product from "./Product";
import buhkTeeBlack from "../products/buhk_t_1.jpg";
import buhkTeeWhite from "../products/buhk_t_2.jpg";
import buhkCanvas1 from "../products/buhk_canvas1.jpg"
import buhkCanvas2 from "../products/buhk_canvas2.jpg"

export default function Store(){
  return(
    <>
      <div className="storeWrapper">
        <div className="storeBanner"/>
        <div className="storeGrid">
          <Product url={buhkTeeBlack} description={'blackshirt'} price={'25.00'} ></Product>
          <Product url={buhkTeeWhite} description={'whiteshirt'} price={'25.00'} ></Product>
          <Product url={buhkCanvas1} description={'set of canvas'} price={'100.00'} ></Product>
          <Product url={buhkCanvas2} description={'canvas blah blah'} price={'150.00'} ></Product>
        </div>
      </div>
    </>
  )
}