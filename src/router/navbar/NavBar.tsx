import React, { FC, useState } from "react";
import { Navbar, Nav, Button, Form, Modal, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SignIn from "../../components/SignIn";
import { IRoute } from "../../models/IRoute";
import LocalStorageService from "../../services/LocalStorageService";

interface Props {
  routes: IRoute[];
  saveSignInUser: (user: IActualUser | any) => void;
  saveSignOutUser: (user: IActualUser | any) => void;
}
const NavBar: FC<Props> = ({ routes, saveSignInUser, saveSignOutUser }) => {
  const history = useHistory();
  const initialState = () => LocalStorageService.isLogged();
  const [showSignIn, setShowSignIn] = useState(false);

  const buttonRenderer = () => {
    if (initialState()) {
      return (
        <Form inline>
          <Button
            variant="success"
            className="mx-2"
            onClick={() => {
              LocalStorageService.removeAuthInfo();
              saveSignOutUser({ isSignIn: false, username: "" });
              history.push("/");
            }}
          >
            Sign Out
          </Button>
        </Form>
      );
    } else {
      return (
        <Form inline>
          <Button
            variant="success"
            className="mx-2"
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            Sign In
          </Button>
          <SignIn
            saveSignInUser={saveSignInUser}
            show={showSignIn}
            callback={() => {
              setShowSignIn(false);
            }}
          ></SignIn>
          <Button variant="success" className="mx-2">
            Sign Up
          </Button>
        </Form>
      );
    }
  };
  return (
    <div>
      <Navbar
        sticky="top"
        className="d-flex justify-content-between"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>API</Navbar.Brand>
        <Nav>
          {routes.map((route) => {
            return (
              <Nav.Item key={route.name}>
                <Nav.Link as={Link} to={route.path} eventKey={route.path}>
                  {route.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        {buttonRenderer()}
      </Navbar>
    </div>
  );
};

export default NavBar;
