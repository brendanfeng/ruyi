import React from 'react';

import ProjectShow from '../projects/project_show';

export default class ProjectReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render () {
    return (
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
        <ProjectShow project={this.state}
          currentUser={ this.props.currentUser }
          creator={ {username: 'test'} }
          fetchProject={ (id) => console.log(id) }>
        </ProjectShow>
        <button className="save-details" onClick={this.props.submitForm}>
          Save Details
        </button>
        <button className="publish" onClick={this.publishProject}>
          Publish Project
        </button>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.updateCurrentProject(Object.assign({}, this.state));
  }
}
