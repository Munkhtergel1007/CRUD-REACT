import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './Components/User';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/user' component={User} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
