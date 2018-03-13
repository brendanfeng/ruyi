import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projId = ownProps.match.params.projId;
  const project = state.entities.projects[projId];
  return {
    projId: projId,
    project: project,
    currentUser: state.session.currentUser || {id: null},
    creator: state.entities.users[project.creator_id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow));
