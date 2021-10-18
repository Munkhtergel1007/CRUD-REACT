import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Posts from "./posts";

import User from "./user";
import Albums from "./albums"
import Todos from './todos'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route
        exact
        path="/user"
        component={User}
      ></Route>
      <Route exact path="/posts" component={Posts}></Route>
      <Route exact path="/albums" component={Albums}></Route>
      <Route exact path="/todos" component={Todos}></Route>
    </Switch>
  </BrowserRouter >,

  document.getElementById("root")
);
