import React, { Component } from 'react';

class Job extends Component {
  render() {
    const { details, colors } = this.props;
    return (
      <div className="job__container" style={{background: colors}}>
          <div className="job">
            <div className="job__header">
              <h3>{details.company}</h3>
              <h4>{details.position}</h4>
            </div>
          
            <div className="job__date">
              {
                details.current ? 
                `Current Job as of ${details.startDate}` : 
                `${details.startDate} to ${details.endDate}`
              }
            </div>
            <br/>
          
            <p className="job__paragraph">{details.summary}</p>
            <ul className="job__list">
              {
                details.highlights.map((key, index) => {
                  return <li key={index}>{details.highlights[index]}</li>
                })
              }
            </ul>
          </div>
      </div>
    );
  }
}

export default Job;
