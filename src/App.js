import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import SkillsList from './components/SkillsList'
import Card from './components/Card';
import Education from './components/Education';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="app">
          <Hero resumeObj={resume} />
          
          <Route
            exact path={'/react-resume/'}
            render={({ match }) => <Card resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/💻'}
            render={({ match }) => <SkillsList resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/🎒'}
            render={({ match }) => <Education education={resume.education[0]} />}
          />
          <Route
            exact path={'/react-resume/📧'}
            render={({ match }) => <Contact info={resume.basics} />}
          />

          <ul className="nav__container">
            <nav className="nav">
              <NavLink exact to={'.'} className="nav__btn">Experience</NavLink>
              <NavLink to={'💻'} className="nav__btn">Skills</NavLink>
              <NavLink to={'🎒'} className="nav__btn">Education</NavLink>
              <NavLink to={'📧'} className="nav__btn">Contact</NavLink>
            </nav>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
