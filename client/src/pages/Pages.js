import React from 'react';
import Auth from '../components/Auth'
import { Route } from 'react-router-dom';

import UserPage from './UserPage';
import Admin from './AdminPage';



export default function Pages() {
  return (
    <>
      <Route exact path="/" component={UserPage} />
      <Route path="/admin" component={Admin}/>
      <Auth />
    </>
  )
}
