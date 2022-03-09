import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Home/Contact";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/contact" component= { Home } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;