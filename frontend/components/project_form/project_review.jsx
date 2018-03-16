import React from 'react';
import { flattenDeep } from 'lodash';

import ProjectShow from '../projects/project_show';

export default class ProjectReview extends React.Component {
  constructor(props) {
    super(props);
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {flattenDeep(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderPublishButton () {
    if (!this.props.currentProject.public) {
      return (
        <button className="publish" onClick={this.props.submitForm}>
          <i className="material-icons">present_to_all</i>
          Publish Project
        </button>
      );
    }
  }

  renderDeleteButton () {
    if (this.props.formType === "edit your project") {
      return (
        <button className="delete-button">
          <i className="material-icons">delete_forever</i>
          Delete Project
        </button>
      );
    }
  }

  render () {
    return (
      <div className="project-child-review">
        <div className="project-child-container">
          <header className="project-child-header">
            <p className="project-child-greeting">
              Make your pitch!
            </p>
            <p className="project-child-description">
              Check out project in the preview below. If you're happy
              with how it looks, share it with everyone else! Otherwise,
              go to the other tabs to keep working.
            </p>
          </header>
          <div className="project-submit-buttons">
            <button className="save-details" onClick={this.props.submitForm}>
              <i className="material-icons">update</i>
              Save Details
            </button>
            {this.renderPublishButton()}
            {this.renderDeleteButton()}
          </div>
          <div className="project-errors">{this.renderErrors()}</div>
        </div>
        <ProjectShow
          projId={this.props.currentProject.id}
          project={this.props.currentProject}
          currentUser={ this.props.currentUser }
          creator={ {username: this.props.currentUser.username} }
          fetchProject={ (id) => console.log(id) }>
        </ProjectShow>
      </div>
    );
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }
}
