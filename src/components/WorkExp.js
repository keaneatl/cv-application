import React, { Component } from "react";
import "../styles/WorkStyles.css";

class WorkExp extends Component {
  constructor() {
    super();
  }

  render() {
    const { WorkBG } = this.props;
    return (
      <div>
        {WorkBG.map((work, i) => {
          return (
            <div className="cv-workexp" key={work.id}>
              <div className="work-lcol">
                <strong>{work.WorkYears}</strong>
                <p>{work.Position}</p>
              </div>
              <div className="work-rcol">
                <h2 className="company-name">{work.Company}</h2>
                <p className="work-details">{work.WorkDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkExp;
