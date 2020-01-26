import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link" to={routes.home}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link" to={routes.authors}>
                Authors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link" to={routes.newPost}>
                New Post
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
