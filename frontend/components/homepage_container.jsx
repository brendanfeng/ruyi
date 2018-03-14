import {connect} from 'react-redux';
import React from 'react';

import Homepage from './homepage';
import { fetchByCategory, fetchHeader } from '../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    content: state.ui.homeContent,
    headerInfo: state.ui.homeHeader,
  };
};
