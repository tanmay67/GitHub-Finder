import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarComp = ({ icon, name }) => {
  const [isNavOpen, setisNavOpen] = useState(false);

  //navbar toggler
  const navToggler = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <Navbar expand="sm" className="navbar-dark bg-dark">
      <div className="container">
        <NavbarBrand>
          <Link
            to="/"
            className="nav-link"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <i className={icon}></i> {name}
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={navToggler} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

//proptypes
NavbarComp.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

//default props
NavbarComp.defaultProps = {
  name: 'Github Finder',
  icon: 'fab fa-github',
};
export default NavbarComp;
