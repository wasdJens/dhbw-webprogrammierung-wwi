import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Root, { About, AllBeers, Beer, Home, RouteQuery, Users } from './routes/routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  },
])

const routerParams = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/beers/:id",
        element: <Beer />
      },
      {
        path: "/beers",
        element: <AllBeers />
      }
    ]
  },
])

const routeQuery = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
    // Visit http://localhost:3000/user?name=Jens
      {
        path: "/user",
        element: <RouteQuery />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
