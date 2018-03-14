import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectForm from './project_form';
import { createProject, receiveErrors } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: Object.values(state.errors.projects),
    formType: 'create your project',
    pathName: "/projects/create"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (project) => dispatch(createProject(project)),
    clearErrors: () => dispatch(receiveErrors(
      {title: [], image: [], blurb: [], story: [], category: [], goal: []}
    )),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
