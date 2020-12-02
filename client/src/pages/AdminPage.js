import React, {useRef} from "react";
// import { useSelector } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import ProductDisplay from '../components/ProductDisplay';


export default function Admin(){
  const contentRef = useRef();
  

  return(
    <>
      <div className="adminWrapper">
        <div className="admin__content">
          <div className="admin__content-right" ref={contentRef}>
            <div className="displayWrapper">
              <div className="displayBanner">
                <div className="admin__content-links">
                  <Link className="admin__content-link" to='/admin/addproduct'>
                add product
              </Link>
              <Link className="admin__content-link" to='/admin/viewproducts'>
                view products
              </Link>
              <Link className="admin__content-link" to='/admin/viewarchive'>
                view archive
              </Link>
                </div>
              </div>
                <Switch>
                    <Route exact path='/admin/' component={ProductDisplay}/>
                    <Route exact path='/admin/addproduct' component={AddProduct}/>
                    <Route exact path='/admin/edit/:id' component={EditProduct}/>
                    <Route exact path='/admin/viewproducts' component={ProductDisplay}/>
                </Switch>
                <div className="displayContent"></div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}