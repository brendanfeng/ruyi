import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Basics from './project_basics';
import Story from './project_story';
import Review from './project_review.jsx';

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount () {
    const {currentUser, project, formType} = this.props;
    if (formType === 'edit project' && currentUser.id !== project.creator_id) {
      return <Redirect to={`/projects/${this.props.project.id}`} />;
    }
  }

  submitForm () {
    const project = Object.assign({}, this.props.currentProject);
    this.props.processForm(project)
    .then((success) => "redirect"); //NB: NOT REAL CODE!!!!!!!
  }

  render() {
    return (
      <div className="project-form-container">
        <nav className="project-form-navbar">
          <NavLink to={`${this.props.pathName}/basics`}>Basics</NavLink>
          <NavLink to={`${this.props.pathName}/story`}>Story</NavLink>
          <NavLink to={`${this.props.pathName}/review`}>Review</NavLink>
        </nav>
        <span className="project-form-title">{this.props.formType}</span>
        <div className="project-form-box">
          <ProtectedRoute exact path={`${this.props.pathName}/basics`}
            component={Basics} project={this.props.project}
              errors={this.props.errors} formType={this.props.formType}
            />
          <ProtectedRoute exact path={`${this.props.pathName}/story`}
            component={Story} project={this.props.project}
              errors={this.props.errors} formType={this.props.formType}
            />
            <ProtectedRoute exact path={`${this.props.pathName}/review`}
            component={Review} submitForm={this.submitForm} />
        </div>
      </div>
    );
  }
}
