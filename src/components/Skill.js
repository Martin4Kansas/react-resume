import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <li className="skill">
        {this.props.details}
      </li>
    );
  }
}

export default Skill;
