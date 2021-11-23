import React, { Component } from "react";
import "../styles/WorkStyles.css";

class WorkExp extends Component {
  constructor() {
    super();
  }

  render() {
    const { Company, Position, WorkYears, WorkDesc } = this.props;
    return (
      <div className="cv-workexp">
        <div className="work-lcol">
          <strong>{WorkYears}</strong>
          <p>{Position}</p>
        </div>
        <div className="work-rcol">
          <h2 className="company-name">{Company}</h2>
          <p className="edu-details">{WorkDesc}</p>
        </div>
      </div>
    );
  }
}

export default WorkExp;
