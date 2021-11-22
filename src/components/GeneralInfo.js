import React from "react";
import "../styles/GenInfoStyles.css";
const GenInfo = (props) => {
  const { FullName, Email, PhoneNum } = props;

  return (
    <div className="cv-geninfo">
      <span><div className="profIcon" alt="Profile Icon" /><h1 className="cv-fname">{FullName}</h1></span>
      <p className="cv-contact">
        {Email} | {PhoneNum}
      </p>
    </div>
  );
};

export default GenInfo;
