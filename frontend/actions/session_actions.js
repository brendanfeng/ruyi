import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = newUser => dispatch => {
  return APIUtil.signup(newUser).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const login = loggedUser => dispatch => {
  return APIUtil.login(loggedUser).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
