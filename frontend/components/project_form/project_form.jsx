import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Basics from './project_basics';
import Story from './project_story';
import Review from './project_review.jsx';

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    const project = Object.assign({}, this.props.currentProject);
    this.props.processForm(project)
    .then((success) => "redirect"); //NB: NOT REAL CODE!!!!!!!
  }

  render() {
    return (
      <div className="project-form-container">
        <span className="project-form-title">{this.props.formType}</span>
        <nav className="project-form-navbar">
          <NavLink to={`${this.props.pathName}/basics`}>Basics</NavLink>
          <NavLink to={`${this.props.pathName}/story`}>Story</NavLink>
          <NavLink to={`${this.props.pathName}/review`}>Review</NavLink>
        </nav>
        <div className="project-form-box">
          <Route exact path={`${this.props.pathName}/basics`}
            render={(props) => <Basics {...props}
            currentProject={this.props.currentProject}
            updateCurrentProject={this.props.updateCurrentProject}/>}
          />
          <Route exact path={`${this.props.pathName}/story`}
            render={(props) => <Story {...props}
            currentProject={this.props.currentProject}
            updateCurrentProject={this.props.updateCurrentProject}/>}
          />
          <Route exact path={`${this.props.pathName}/review`}
            render={(props) => <Review {...props}
            currentProject={this.props.currentProject}
            currentUser={this.props.currentUser}
            submitForm={this.submitForm}
            updateCurrentProject={this.props.updateCurrentProject}
            errors={this.props.errors}
            formType={this.props.formType}/>}
          />
        </div>
      </div>
    );
  }
}
