import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Basics from './project_basics';
import Story from './project_story';
import Review from './project_review.jsx';

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    const _default = {
      title: '',
      blurb: '',
      img_url: '',
      story: '',
      category: 'Design & Tech',
      pledged_amount: 0,
      goal: 100,
      public: false,
      creator_id: null
    };
    this.state = props.currentProject || _default;
    this.submitForm = this.submitForm.bind(this);
    this.update = this.update.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleChange(html) {
    this.setState({ story: html });
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
    {upload_preset: "blqvznu6",
      multiple: false,
      client_allowed_formats: ["png","gif", "jpeg"]},
    (error, result) => {
      if (error === null) {
        this.setState({img_url: result[0].public_id,
        uploadedfile: result[0].original_filename});
      }}
    );
  }

  submitForm (e) {
    e.preventDefault();
    const formProject = Object.assign({}, this.state);
    if (e.currentTarget.innerText === "present_to_allPublish Project") {
      formProject["public"] = true;
    }
    this.props.processForm(formProject)
    .then((action) => {
      return this.props.history.push(`/projects/show/${action.project.id}`);
    });
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
            currentProject={this.state}
            update={this.update}
            handleUpload={this.handleUpload}/>}
          />
          <Route exact path={`${this.props.pathName}/story`}
            render={(props) => <Story {...props}
            story={this.state.story}
            handleChange={this.handleChange}/>}
          />
          <Route exact path={`${this.props.pathName}/review`}
            render={(props) => <Review {...props}
            currentProject={this.state}
            currentUser={this.props.currentUser}
            submitForm={this.submitForm}
            errors={this.props.errors}
            formType={this.props.formType}
            clearErrors={this.props.clearErrors}/>}
          />
        </div>
      </div>
    );
  }
}
