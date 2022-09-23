import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function RouteMatcher() {
  return (
    <Router>
      <Switch>
        <Route path="/beers/:id">
          <Beer />
        </Route>
        <Route path="/beers">
          <AllBeers />
        </Route>
      </Switch>
    </Router>
  );
}

function Beer() {
  return <h1>Specific Beer</h1>;
}

function AllBeers() {
  return <h1>All beers</h1>;
}
