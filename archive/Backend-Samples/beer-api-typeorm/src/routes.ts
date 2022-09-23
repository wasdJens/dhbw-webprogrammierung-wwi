import { BeerController } from "./controller/BeerController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/beers",
    controller: BeerController,
    action: "all",
  },
  {
    method: "get",
    route: "/beers/:id",
    controller: BeerController,
    action: "one",
  },
  {
    method: "post",
    route: "/beers",
    controller: BeerController,
    action: "save",
  },
  {
    method: "delete",
    route: "/beers/:id",
    controller: BeerController,
    action: "remove",
  },
];
