import { useParams, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import React from "react";

export default function Root() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export function Home() {
  return <h2>Home</h2>
}

export function About() {
  return <h2>About</h2>
}

export function Users() {
  return <h2>Users</h2>
}

export function Beer() {
  const params = useParams();
  return <h2>Specific Beer {params.id}</h2>
}

export function AllBeers() {
  return <h2>All beers</h2>
}

export function RouteQuery() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <h2>Query parameter name is {name}</h2>
  )
}