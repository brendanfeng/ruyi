import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'sign up',
    navLink:
      <div className="login-form-alt">
        Have an account? <Link to="/login">Log In!</Link>
      </div>,
    buttonText: 'Create Account'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
