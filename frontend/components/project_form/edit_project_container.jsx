import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import {
  updateProject,
  deleteProject,
  receiveErrors } from '../../actions/project_actions';
import { updateCurrentProject } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const projId = ownProps.match.params.projId;
  return {
    currentProject: state.ui.currentProject,
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
      {title: [], img_url: [], blurb: [], story: [], category: [], goal: []}
    )),
    updateCurrentProject: (proj) => dispatch(updateCurrentProject(proj)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
