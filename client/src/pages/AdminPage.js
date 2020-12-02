import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, Switch, Route, Redirect } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import ProductDisplay from '../components/ProductDisplay';
import Footer from '../components/Footer';
import {logout} from '../store/actions/authActions'


export default function Admin(){
  const contentRef = useRef();
  const dispatch = useDispatch();
  
   const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const currentUserId = useSelector(state => state.auth.id);

  if(!currentUserId) return <Redirect to='/'/>

  return(
    <>
      <div className="adminWrapper">
        <div className="admin__content">
          <div className="adminBanner">
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
                to='/' onClick={handleLogout} >
                logout
              </Link>
            </div>
            <Link to='/'><div className='adminBanner__logo'/></Link> 
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
    </>
  )
}