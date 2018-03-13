import React from 'react';
import { flattenDeep } from 'lodash';

import ProjectShow from '../projects/project_show';

export default class ProjectReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      blurb: '',
      img_url: '',
      story: '',
      category: 'Design & Tech',
      pledged_amount: 0,
      goal: 100,
      creator_id: -1
    };
    this.publishProject = this.publishProject.bind(this);
  }

  componentDidMount () {
    this.setState(this.props.currentProject);
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps.currentProject);
  }

  publishProject (e) {
    e.preventDefault();
    this.setState({public: true});
    this.props.updateCurrentProject(Object.assign({}, this.state));
    this.props.submitForm();
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

  renderDeleteButton () {
    if (this.props.formType === "edit your project") {
      return (
        <button className="delete-button" id='delete'>
          <i className="material-icons">delete_forever</i>
          Delete Project
        </button>
      );
    } else {
      return <div></div>;
    }
  }

  render () {
    return (
      <div className="project-child-review">
        <div className="project-child-container">
          <header className="project-child-header">
            <p className="project-child-greeting">
              Share with the world!
            </p>
            <p className="project-child-description">
              Check out how your project looks in the preview below. You
              can save it to edit later, or if you think it's ready,
              publish the project so you can start fundraising.
            </p>
          </header>
          <div className="project-submit-buttons">
            <button className="save-details" onClick={this.props.submitForm}>
              <i className="material-icons">update</i>
              Save Details
            </button>
            <button className="publish" onClick={this.publishProject}>
              <i className="material-icons">present_to_all</i>
              Publish Project
            </button>
            {this.renderDeleteButton()}
          </div>
          <div className="project-errors">{this.renderErrors()}</div>
        </div>
        <ProjectShow
          projId={this.props.currentProject.id}
          project={this.state}
          currentUser={ this.props.currentUser }
          creator={ {username: this.props.currentUser.username} }
          fetchProject={ (id) => console.log(id) }>
        </ProjectShow>
        <div>

        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.updateCurrentProject(Object.assign({}, this.state));
  }
}
