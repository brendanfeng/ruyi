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
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    updateCurrentProject(Object.assign({}, this.state));
  }
}
