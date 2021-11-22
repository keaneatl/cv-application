import React from "react";
import "../styles/EducationStyles.css";
const Education = (props) => {
  const { School, Level, Years, SchoolDesc } = props;

  return (
    <div className="cv-education">
        <div className="edu-lcol">
            <strong>{Years}</strong>
            <p>{Level}</p>
        </div>
        <div className="edu-rcol"> 
            <h2 className="edu-name">{School}</h2>
            <p className="edu-details">
                {SchoolDesc}
            </p>
        </div>
    </div>
  );
};

export default Education;
