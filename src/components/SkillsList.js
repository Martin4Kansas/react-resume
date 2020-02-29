import React, { Component } from 'react';
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    const { skills } = this.props.resumeObj;
  
    return (
      <div
        className="skills-list__container"
        style={{display: 'flex'}}
      >
        <div className="skills-list__modal">
          <h1 className="skills-list__header">Skill Set</h1>
          <br />
          <ul className="skills-list">
            {
              skills.keywords
                .map((key, index) => <Skill key={key} details={skills.keywords[index]}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillsList;
