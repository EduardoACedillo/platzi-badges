import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logo from "../images/badge-header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <Link className="Navbar__brand" to="/home">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">conf</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;
