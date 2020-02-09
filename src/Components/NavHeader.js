import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import routes from "../routes/routes";
import { AdminContext } from "../Store/AdminProvider";
import { USER_LOGGED_OUT } from "../actions/actions";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const store = useContext(AdminContext);
  const { state, dispatch } = store;
  const { isLoggedIn } = state;

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    dispatch({
      type: USER_LOGGED_OUT
    });
    history.push(routes.home);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={routes.home}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={routes.authors}
              >
                Authors
              </NavLink>
            </NavItem>
            <NavItem>
              {isLoggedIn ? (
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to={routes.newPost}
                >
                  New Post
                </NavLink>
              ) : null}
            </NavItem>
          </Nav>
          {
            isLoggedIn
            ?
            <Button onClick={logout}>Logout</Button>
            :
            <NavLink
              activeClassName="active"
              className="nav-link"
              to={routes.adminLogin}
            >
              Login
            </NavLink>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
