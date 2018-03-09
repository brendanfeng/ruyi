import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'log in',
    navLink:
      <div className="login-form-alt">
      New to RuYi?<Link to="/signup">Sign Up!</Link>
      </div>,
    buttonText: 'Log Me In!'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    guestLogin: () => (
      dispatch(login({username:"DarrenBuffet", password:"allyoucaneat"})
    )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
