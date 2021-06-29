import React from "react";

import "./styles/Navbar.css";
import logo from "../images/badge-header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
