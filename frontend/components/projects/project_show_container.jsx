import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projId = ownProps.match.params.projId;
  const project = state.entities.projects[projId];
  let creator;
  if (project) creator = state.entities.users[project.creator_id];
  return {
    projId: projId,
    project: project,
    creator: creator,
    currentUser: state.session.currentUser || {id: null},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow));
