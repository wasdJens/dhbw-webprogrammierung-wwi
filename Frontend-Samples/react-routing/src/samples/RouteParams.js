// @ts-nocheck
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

export default function RouteParams() {
  return (
    <Router>
      <Switch>
        <Route path="/beers/:id">
          <Beer />
        </Route>
        <Route path="/beers">
          <AllBeers />
        </Route>
        <Route path="/beer/:id" component={BeerComponent}>
        </Route>
      </Switch>
    </Router>
  );
}

function Beer() {
  const { id } = useParams();
  return <h1>Specific Beer with id {id}</h1>;
}

function AllBeers() {
  return <h1>All beers</h1>;
}

class BeerComponent extends React.Component {

  render() {
    return (
      <h1>
        Beer Component as Class Component with id {this.props.match.params.id}
      </h1>
    );
  }
}
