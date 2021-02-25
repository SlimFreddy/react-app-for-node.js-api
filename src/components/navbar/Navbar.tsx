import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IRoute } from "../../models/IRoute";

interface Props {
  routes: IRoute[];
}
const NavBar: FC<Props> = ({ routes }) => {
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>API</Navbar.Brand>
        <Nav className="mr-auto">
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
      </Navbar>
    </div>
  );
};

export default NavBar;
