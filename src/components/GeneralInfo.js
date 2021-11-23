import React, { Component } from "react";
import "../styles/GenInfoStyles.css";

class GenInfo extends Component {
  constructor() {
    super();
  }

  render() {
    const { FullName, Email, PhoneNum } = this.props;
    return (
      <div className="cv-geninfo">
        <span>
          <div className="profIcon" alt="Profile Icon" />
          <h1 className="cv-fname">{FullName}</h1>
        </span>
        <p className="cv-contact">
          {Email} | {PhoneNum}
        </p>
      </div>
    );
  }
}

export default GenInfo;
