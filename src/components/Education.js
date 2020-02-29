import React from 'react';

const Education = (props) => {
  const { area, endDate, institution, studyType } = props.education;
  return (
    <div className="education__container" style={{display: 'flex'}}>
      <div className="education__modal">
        <div className="education">
          <h1 className="education__header">Education</h1>
          <div className="education__text">
            <h4 className="education__subheader">{institution}</h4>
            <h5>{studyType} in {area}</h5>
            <h5>Graduated {endDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default Education;
