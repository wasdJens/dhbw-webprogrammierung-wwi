import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BeerDetail, { beerDetailLoader } from "./components/details/BeerDetail.jsx";
import BeerList from "./components/lists/BeerList.jsx";
import BeerList2 from "./components/lists/BeerList2.jsx";
import BeerList3 from "./components/lists/BeerList3.jsx";
import Home from "./components/Home.jsx";

library.add(fas, faBeerMugEmpty);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/beers",
        element: <BeerList />
      },
      {
        path: "/beers2",
        element: <BeerList2 />
      },
      {
        path: "/beers3",
        element: <BeerList3 />,
      },
      {
        path: "/beers/:beerId",
        element: <BeerDetail />,
        loader: beerDetailLoader,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
