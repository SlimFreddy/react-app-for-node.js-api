import React, { FC, useState } from "react";
import { Navbar, Nav, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "../../components/SignIn";
import { IRoute } from "../../models/IRoute";

interface Props {
  routes: IRoute[];
}
const NavBar: FC<Props> = ({ routes }) => {
  const [showSignIn, setShowSignIn] = useState(false);

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
            show={showSignIn}
            callback={() => {
              setShowSignIn(false);
            }}
          ></SignIn>
          <Button variant="success" className="mx-2">
            Sign Up
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
