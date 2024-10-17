import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark justify-between px-5 py-3">
      <div className="container-fluid w-auto">
        <Link className="navbar-brand" to="/">
          Python Market Place
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-5 mb-2 mb-lg-0 position-absolute end-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">
              My Cart {4}
            </Link>
          </li>
          <li  className="text-decoration-none">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item><Link to='/customer/login'>Login </Link></Dropdown.Item>
                <Dropdown.Item><Link to='/customer/register'> Register </Link></Dropdown.Item>
                <Dropdown.Item><Link to='/customer/login'>Dashboard</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/customer/login'>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
