import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <div>
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                </div>
                <div className="email__name">{badge.email}</div>
                <div>{badge.jobTitle}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
