import { connect } from 'react-redux';
import React from 'react';

import { logout } from '../../actions/session_actions';
import FormButton from './form_button';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormButton);
