import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Callback';
import Auth from './Auth';
import history from './history';
import Login from './Login'
import App from './App';
import Logout from './Logout'

export const route = () => {

  return (

    <Router history={history}>
      <div>
        <Route exact path="/" render={(props) => <App  {...props} />} />


      </div>
    </Router>
  );
}
