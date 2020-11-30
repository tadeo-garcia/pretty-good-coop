import React from "react";
// import { useSelector } from "react-redux";
import {  Switch, Route } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay"

export default function Dashboard(){
  
  return(
    <>
      <div className="dashboardWrapper">
        <div id="dashboard__content">
            <Switch>
              <Route exact path="/dashboard" component={ProductDisplay} />
            </Switch>
          </div>
      </div>
    </>
  )
}