import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/badge-header.svg";
import "../pages/styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <dir className="col-text">
        <img src={logo} alt="Platzi conf logo" />
        <p>
          <h1>BADGE MANAGEMENT SYSTEM</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </p>
      </dir>
      <dir className="col-img">
        <img src={logo} alt="Astronauta" />
      </dir>
    </div>
  );
}

export default Home;
