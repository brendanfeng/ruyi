import React from 'react';
import { Link } from 'react-router-dom';

import { updateCurrentProject } from '../../actions/ui_actions';

export default class ProjectBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: ''
    };
  }

  render() {
    return (
      <div className="project-child-container">
        <header>
          <span className="project-child-greeting">What's your story?</span>
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
