import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import ProductDisplay from '../components/ProductDisplay';
import {logout} from '../store/actions/authActions'


export default function Admin(){
  const contentRef = useRef();
  const dispatch = useDispatch();
  
   const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return(
    <>
      <div className="adminWrapper">
        <div className="admin__content">
          <div className="displayBanner">
            <div className="admin__content-links">
              <Link className="admin__content-link" 
                to='/admin/addproduct'>
                add product
              </Link>
              <Link className="admin__content-link" 
                to='/admin/viewproducts'>
                view products
              </Link>
              <Link className="admin__content-link" 
                to='/admin/orders'>
                view orders
              </Link>
              <Link className="admin__content-link" 
                to='/admin/viewarchive'>
                view archive
              </Link>
              <Link className="admin__content-link" 
                to='/home'>
                home
              </Link>
              <Link className="admin__content-link" 
                to='/shop'>
                shop
              </Link>
              <Link className="admin__content-link" 
                to='/' onClick={handleLogout} >
                logout
              </Link>
            </div>
          <div className="displayWrapper">
            <Switch>
                <Route exact path='/admin/' component={ProductDisplay}/>
                <Route exact path='/admin/addproduct' component={AddProduct}/>
                <Route exact path='/admin/edit/:id' component={EditProduct}/>
                <Route exact path='/admin/viewproducts' component={ProductDisplay}/>
            </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}