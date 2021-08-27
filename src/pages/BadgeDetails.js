import React from "react";
import "./styles/BadgeDetails.cs";
import confLogo from "../images/platziconf-logo.svg";

class BadgeDetails extends React.Component {
    this.state = {
        loading: true,
        error: null,
        data
    }
  render() {
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>Richard Kaufman</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
