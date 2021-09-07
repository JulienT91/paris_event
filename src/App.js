import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";
import Favorites from "./views/Favorites";
import Details from "./views/Details";
import './App.css';

function App () {
 
  return (
  <Router basename="/paris_event/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event" exact component={Search} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/details" exact component={Details} />
        </Switch>
  </Router>
  );
}

export default App;
