import React, {useState, useRef} from "react";
import { useSelector } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';

export default function Admin(){
  const contentRef = useRef();
  
  return(
    <>
      <div className="adminWrapper">
        <div className="admin__content">
          <div className="admin__content-leftnav">
            <div className="admin__content-links">
              <Link className="admin__content-link" to='/admin/addproduct'>Add Product</Link>
              <Link className="admin__content-link" to='/admin/editproduct/:id'>Edit Product</Link>
            </div>
          </div>
          <div className="admin__content-right" ref={contentRef}>
            <Switch>
                <Route exact path='/admin/addproduct' component={AddProduct}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}