import React, { Dispatch, FC, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { IRoute } from "../models/IRoute";
import { ROUTES_NO_TOKEN, ROUTES_WITH_TOKEN } from "./Routes";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { signInUser, signOutUser } from "../store/actionCreators";

const RouterView: FC = () => {
  const actualUser: IActualUser = useSelector(
    (state: ActualUserState) => state.user,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveSignInUser = React.useCallback(
    (user: IActualUser) => dispatch(signInUser(user)),
    [dispatch]
  );
  const saveSignOutUser = React.useCallback(
    (user: IActualUser) => dispatch(signOutUser(user)),
    [dispatch]
  );
  const [routes, setRoutes] = useState<IRoute[]>(() => {
    if (actualUser.isSignIn) {
      return ROUTES_WITH_TOKEN;
    } else {
      return ROUTES_NO_TOKEN;
    }
  });

  useEffect(() => {
    if (actualUser.isSignIn) {
      setRoutes(ROUTES_WITH_TOKEN);
    } else {
      setRoutes(ROUTES_NO_TOKEN);
    }
  }, [actualUser]);

  return (
    <div>
      <NavBar
        routes={routes}
        saveSignInUser={saveSignInUser}
        saveSignOutUser={saveSignOutUser}
        actualUser={actualUser}
      />
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
