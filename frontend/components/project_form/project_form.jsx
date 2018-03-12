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
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillMount () {
    const {currentUser, project, formType} = this.props;
    if (formType === 'edit your project' && currentUser.id !== project.creator_id) {
      return <Redirect to={`/projects/${this.props.project.id}`} />;
    }
  }

  componentDidMount () {
    this.props.updateCurrentProject(this.props.project);
  }

  submitForm (e) {
    e.preventDefault();
    const project = Object.assign({}, this.props.currentProject);
    this.props.processForm(project)
    .then((success) => "redirect"); //NB: NOT REAL CODE!!!!!!!
  }

  renderErrors(errorsArray) {
    return(
      <ul className="errors-list">
        {errorsArray.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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
          <ProtectedRoute exact path={`${this.props.pathName}/basics`}
            component={Basics} props={this.props.currentProject}
            project={this.props.project}
            />
          <ProtectedRoute exact path={`${this.props.pathName}/story`}
            component={Story} currentProject={this.props.currentProject}

            />
            <ProtectedRoute exact path={`${this.props.pathName}/review`}
            component={Review} currentProject={this.props.currentProject}
            submitForm={this.submitForm} />
        </div>
      </div>
    );
  }
}
