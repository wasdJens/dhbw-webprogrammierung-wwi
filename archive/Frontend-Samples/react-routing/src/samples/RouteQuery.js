import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export default function RouteQuery() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
        <h3>Users</h3>
        <ul>
          <li>
            <Link to="/user?name=Jens">Jens</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
    </div>
  );
}

function Child({ name }) {
  return (
    <div>Query parameter name is {name}</div>
  );
}