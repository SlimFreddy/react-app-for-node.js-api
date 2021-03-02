import React, { FC, useState } from "react";
import { Navbar, Nav, Button, Form, Image, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { USER_IMAGE } from "../../config/Endpoints";
import { IRoute } from "../../models/IRoute";
import style from "./NavBar.module.scss";
interface Props {
  routes: IRoute[];
  actualUser: IActualUser;
  saveSignInUser: (user: IActualUser | any) => void;
  saveSignOutUser: (user: IActualUser | any) => void;
}
const NavBar: FC<Props> = ({
  routes,
  saveSignInUser,
  saveSignOutUser,
  actualUser,
}) => {
  const history = useHistory();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const buttonRenderer = () => {
    if (actualUser.isSignIn) {
      return (
        <Form inline>
          <Dropdown className={style.button} drop="left">
            <Dropdown.Toggle id="dropdown-basic">
              <Image
                className={style.userImage}
                src={`${USER_IMAGE + actualUser.userId}`}
                alt=""
              ></Image>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">User Settings</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/");
                  saveSignOutUser({
                    isSignIn: false,
                    username: "",
                    userId: "",
                  });
                }}
              >
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
          <Button
            variant="success"
            className="mx-2"
            onClick={() => {
              setShowSignUp(true);
            }}
          >
            Sign Up
          </Button>
          <SignUp
            show={showSignUp}
            callback={() => {
              setShowSignUp(false);
            }}
          ></SignUp>
        </Form>
      );
    }
  };
  return (
    <div>
      <Navbar
        sticky="top"
        className={style.navBar + " d-flex justify-content-between"}
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
