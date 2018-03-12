import React from 'react';
import { Link } from 'react-router-dom';

import { updateCurrentProject } from '../../actions/ui_actions';

export default class ProjectStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.currentProject);
  }

  render() {
    return (
      <div className="project-child-container">
        <header className="project-child-header">
          <p className="project-child-greeting">
            What's your story?
          </p>
          <p className="project-child-description">
            Tell us more about your project and yourself. Why did you decide
            to start your project, and what future for it do you envision?
            Be sure to get specific about why people should be excited.
          </p>
        </header>
        <form className="project-child-form">
          
        </form>
      </div>
    );
  }

  componentWillUnmount() {
    updateCurrentProject(Object.assign({}, this.state));
  }
}
