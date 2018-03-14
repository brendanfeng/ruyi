import { connect } from 'react-redux';
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import {
  fetchProject,
  updateProject,
  deleteProject,
  receiveErrors } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projId = ownProps.match.params.projId;
  return {
    projId: projId,
    currentProject: state.entities.projects[projId],
    currentUser: state.session.currentUser,
    errors: Object.values(state.errors.projects),
    formType: 'edit your project',
    pathName: `/projects/update/${projId}`
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    clearErrors: () => dispatch(receiveErrors(
      {title: [], image: [], blurb: [], story: [], category: [], goal: []}
    )),
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

class EditProjectForm extends React.Component {
  componentDidMount () {
    if (!this.props.currentProject) this.props.fetchProject(this.props.projId);
  }

  render() {
    const { projId, currentProject, currentUser, errors, formType, processForm, pathName, clearErrors, history } =
    this.props;
    if (!this.props.currentProject) return null;
    if (this.props.currentUser.id === this.props.currentProject.creator_id) {
      return (<ProjectForm
        history={history}
        projId={projId}
        currentProject={currentProject}
        currentUser={currentUser}
        errors={errors}
        formType={formType}
        pathName={pathName}
        processForm={processForm}
        clearErrors={clearErrors}
        deleteProject={this.props.deleteProject}
        fetchProject={this.props.fetchProject}
         />);
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProjectForm));
