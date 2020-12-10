import React from "react";
import {  Switch, Route } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import About from "./About";
import Splash from "./Splash";
import ContactForm from "./ContactForm";
import Cart from "./Cart";

export default function Dashboard({desktop}){
  // console.log(desktop)

  return(
    <>
      <div className="dashboardWrapper">
        <div id="dashboard__content">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={ProductDisplay} />
              <Route exact path="/cart" 
                render={(props)=>(
                  <Cart {...props} desktop={desktop} />
                )} />
              <Route exact path="/contact" component={ContactForm} />
              <Route exact path='/' component={Splash}/>
            </Switch>
          </div>
      </div>
    </>
  )
}