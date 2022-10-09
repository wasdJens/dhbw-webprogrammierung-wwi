import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <main>
        <h2>Select from one of the following samples: </h2>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/tables">Tables</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}