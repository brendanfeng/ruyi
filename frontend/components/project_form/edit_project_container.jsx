import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import {
  updateProject,
  deleteProject,
  receiveErrors } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.projId],
    errors: state.errors.projects,
    formType: 'edit project'
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
