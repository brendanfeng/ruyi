import { connect } from 'react-redux';
import React from 'react';

import ProjectForm from './project_form';
import { createProject, receiveErrors } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.projects,
    formType: 'create project'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project) => dispatch(createProject(project)),
    clearErrors: () => dispatch(receiveErrors(
      {title: [], img_url: [], blurb: [], story: [], category: [], goal: []}
    )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
