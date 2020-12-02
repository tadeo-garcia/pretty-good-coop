import React from 'react';
import Auth from '../components/Auth'
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
      <Route exact path="/" component={UserPage} />
      <Route path="/admin" component={Admin}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Switch>
    <Footer/>
    </>
  )
}
