import React, { Component } from 'react';
import Jobs from './Job';

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ['#fb8c00', '#3949ab', '#e53935'];
   
    return (
      <div className="card__container">
        <div className="card__content">
         {
            work.map((key, index) => {
              return (
                <Jobs
                  key={index} 
                  details={work[index]}
                  colors={bgColors[index]}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Card;
