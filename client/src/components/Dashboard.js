import React from "react";
// import { useSelector } from "react-redux";
import {  Switch, Route } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import About from "./About";
import Splash from "./Splash";

export default function Dashboard(){
  
  return(
    <>
      <div className="dashboardWrapper">
        <div id="dashboard__content">
            <Switch>
              <Route exact path='/' component={Splash}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={ProductDisplay} />
            </Switch>
          </div>
      </div>
    </>
  )
}