import React from 'react';
import { Link } from 'react-router-dom';

import { updateCurrentProject } from '../../actions/ui_actions';

export default class ProjectBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img_url: '',
      blurb: '',
      category: '',
      goal: 100,
      pledged_amount: 0,
      public: false
    };
  }

  render() {
    return (
      <div className="project-child-container">
        <header>
          <span className="project-child-greeting">Let's get started</span>
          <span className="project-child-description"></span>
        </header>
        <form>
          Project Title
          <input type="text"></input>
          Project Blurb
          <input type="text"></input>
          Choose a Category:
          <select className="project-category-dropdown">
            <option>Design & Tech</option>
            <option>Arts</option>
            <option>Music</option>
            <option>Comics & Illustration</option>
            <option>Film</option>
            <option>Games</option>
            <option>Food & Craft</option>
            <option>Publishing</option>
          </select>
          Fundraising Goal
          <input type="number"></input>
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    updateCurrentProject(Object.assign({}, this.state));
  }
}
