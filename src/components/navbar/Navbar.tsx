import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import { IRoute } from "../../models/IRoute";

interface Props {
  routes: IRoute[];
}
const Navbar: FC<Props> = ({ routes }) => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        {routes.map((route) => {
          return (
            <Nav.Item key={route.name}>
              <Nav.Link href={route.path}>{route.name}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
};

export default Navbar;
