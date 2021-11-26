import React, { Component } from "react";
import "../styles/EducationStyles.css";

class Education extends Component {
  constructor() {
    super();
  }
  render() {
    const { EduBG } = this.props;
    return (
      <div>
        {console.log(EduBG)}
        {EduBG.map((details, i) => {
          return (
            <div className="cv-education" key={details.id}>
              <div className="edu-lcol">
                <strong>{details.Years}</strong>
                <p>{details.Level}</p>
              </div>
              <div className="edu-rcol">
                <h2 className="edu-name">{details.School}</h2>
                <p className="edu-details">{details.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
