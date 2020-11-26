import React, {useState, useRef} from "react";
import { useSelector } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import ProductDisplay from '../components/ProductDisplay';

export default function Admin(){
  const contentRef = useRef();
  

  return(
    <>
      <div className="adminWrapper">
        <div className="admin__content">
          <div className="admin__content-leftnav">
            <div className="admin__content-links">
              <Link className="admin__content-link" to='/admin/addproduct'>
                Add Product
              </Link>
              <Link className="admin__content-link" to='/admin/editproduct/:id'>
                Edit Product
              </Link>
              <Link className="admin__content-link" to='/admin/viewproducts'>
                View Products
              </Link>
              <Link className="admin__content-link" to='/admin/viewarchive'>
                View Archive
              </Link>
            </div>
          </div>
          <div className="admin__content-right" ref={contentRef}>
            <Switch>
                <Route exact path='/admin/addproduct' component={AddProduct}/>
                <Route exact path='/admin/viewproducts' component={ProductDisplay}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}