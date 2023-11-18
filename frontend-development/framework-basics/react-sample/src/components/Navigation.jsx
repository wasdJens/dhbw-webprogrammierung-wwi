import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/beers`}>Beers 1</Link>
        </li>
        <li>
          <Link to={`/beers2`}>Beers 2</Link>
        </li>
        <li>
          <Link to={`/beers3`}>Beers 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;