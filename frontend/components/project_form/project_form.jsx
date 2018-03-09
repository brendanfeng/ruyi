import React from 'react';
import { Redirect, Switch, NavLink, Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Basics from './project_basics';
import Story from './project_story';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount () {
    const {currentUser, project, formType} = this.props;
    if (currentUser.id !== project.creator_id && formType === 'edit project') {
      return <Redirect to={`/projects/${this.props.project.id}`} />;
    }
  }

  submitForm () {
    const project = Object.assign({}, this.props.currentProject);
    this.props.processForm(project)
    .then((success) => "redirect", (errors) => "stay");
  }

  render() {
    return (
      <div className="project-form-container">
        <form onSubmit={this.handleSubmit} className="project-form-box">
          <span className="project-form-title">{this.props.formType}</span>
          <nav className="project-form-navbar">
            <NavLink to="/projects/:projId/basics">Basics</NavLink>
            <NavLink to="/projects/:projId/story">Story</NavLink>
            <NavLink to="/projects/:projId/review">Review</NavLink>
          </nav>
          <ProtectedRoute exact path="/projects/:projId/form/:formType/story"
            component={<Story />} />
          <ProtectedRoute exact path="/projects/:projId/form/:formType/basics"
            component={<Basics />} />
          <ProtectedRoute exact path="/projects/:projId/form/:formType/review"
            component={<Review submitForm={this.submitForm} />} />
        </form>
      </div>
    );
  }
}


export default ProjectForm;
