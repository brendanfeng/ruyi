import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import {
  updateProject,
  deleteProject,
  receiveErrors } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projId = ownProps.match.params.projId;
  return {
    currentProject: state.ui.currentProject,
    currentUser: state.session.currentUser,
    project: state.projects[projId],
    errors: state.errors.projects,
    formType: 'edit project',
    pathName: `/projects/update/${projId}`
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    clearErrors: () => dispatch(receiveErrors(
      {title: [], img_url: [], blurb: [], story: [], category: [], goal: []}
    )),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
