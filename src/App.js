import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./views/Search";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Details from "./views/Details";
import './App.css';

function App() {
  return (
  <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recherche" exact component={Search} />
          <Route path="/favoris" component={Favorites} />
          <Route path="/event" component={Details} />
        <Route component={NotFound} />
        </Switch>
  </BrowserRouter>
  );
}

export default App;
