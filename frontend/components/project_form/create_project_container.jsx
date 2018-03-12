import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import { createProject, receiveErrors } from '../../actions/project_actions';
import { updateCurrentProject } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentProject: state.ui.currentProject,
    currentUser: state.session.currentUser,
    errors: state.errors.projects,
    formType: 'create your project',
    pathName: "/projects/create"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project) => dispatch(createProject(project)),
    clearErrors: () => dispatch(receiveErrors(
      {title: [], img_url: [], blurb: [], story: [], category: [], goal: []}
    )),
    updateCurrentProject: (proj) => dispatch(updateCurrentProject(proj))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
