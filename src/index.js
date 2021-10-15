import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Posts from "./posts";

import User from "./user.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route
        exact
        path="/user"
        component={User}
      ></Route>
      <Route exact path="/posts" component={Posts}>

      </Route>
    </Switch>
  </BrowserRouter >,

  document.getElementById("root")
);
