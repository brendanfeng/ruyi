import {connect} from 'react-redux';
import React from 'react';

import Homepage from './homepage';
import { fetchIndex, fetchHeader } from '../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    projects: state.entities.projects,
    creators: state.entities.users,
    indexHeader: state.ui.indexHeader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndex: (category) => dispatch(fetchIndex(category)),
    fetchHeader: () => dispatch(fetchHeader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
