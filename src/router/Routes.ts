import { IRoute } from "../models/IRoute";
import About from "../views/About";
import Home from "../views/Home";
import Log from "../views/UserSettings";

const BASE_ROUTES: IRoute[] = [
  { name: "Home", path: "/", exact: true, view: Home },
  { name: "About", path: "/about", exact: true, view: About },
];
export const ROUTES_NO_TOKEN: IRoute[] = [...BASE_ROUTES];

export const ROUTES_WITH_TOKEN: IRoute[] = [...BASE_ROUTES, {name:"User Settings", path:"/user-settings", view: Log, exact: true }];
