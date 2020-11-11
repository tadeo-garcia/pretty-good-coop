import React from 'react';
import Auth from '../components/Auth'
import { Route } from 'react-router-dom';
import HomePage from './HomePage'
import NavBar from '../components/Navbar'




export default function Pages() {
  return (
    <>
      <NavBar/>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/dashboard" component={Dashboard}/> */}
      <Auth />
    </>
  )
}
