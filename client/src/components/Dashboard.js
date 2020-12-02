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
              <Route to='/' component={Splash}/>
              <Route exact path="/dashboard" component={ProductDisplay} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
      </div>
    </>
  )
}