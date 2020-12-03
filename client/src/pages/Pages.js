import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserPage from './UserPage';
import Admin from './AdminPage';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Footer from '../components/Footer';



export default function Pages() {
  return (
    <>
    <Switch>
      <Route path="/admin" component={Admin}/>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path="/" component={UserPage} />
    </Switch>
    <Footer/>
    </>
  )
}
