import React, { FC, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import { IRoute } from "../models/IRoute";
import LocalStorageService from "../services/LocalStorageService";
import { ROUTES_NO_TOKEN, ROUTES_WITH_TOKEN } from "./Routes";

const RouterView: FC = () => {
  const initialState = () => LocalStorageService.isLogged();
  const [routes, setRoutes] = useState<IRoute[]>(() => {
    if (initialState()) {
      return ROUTES_WITH_TOKEN;
    } else {
      return ROUTES_NO_TOKEN;
    }
  });

  useEffect(() => {
    if (initialState()) {
      setRoutes(ROUTES_WITH_TOKEN);
    } else {
      setRoutes(ROUTES_NO_TOKEN);
    }
  }, [initialState()]);

  return (
    <div>
      <NavBar routes={routes} />
      {routes.map((route) => {
        return (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            component={route.view}
          />
        );
      })}
    </div>
  );
};

export default RouterView;
