import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IRoute } from "../../models/IRoute";

interface Props {
  routes: IRoute[];
}
const Navbar: FC<Props> = ({ routes }) => {
  return (
    <div>
      <Nav color="secondary" justify variant="pills" defaultActiveKey="/">
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
    </div>
  );
};

export default Navbar;
