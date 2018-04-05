import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';

import Discover from './discover';
import { searchIndex } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.entities.projects,
    creators: state.entities.users,
    results: state.ui.search,
    query: ownProps.location.search.slice(1),
    category: ownProps.match.params.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchIndex: (query) => dispatch(searchIndex(query))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));
