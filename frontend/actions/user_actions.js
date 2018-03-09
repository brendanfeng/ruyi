import * as APIUtil from '../util/user_api_util';

const RECEIVE_USER = 'RECEIVE_USER';
const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(payload => {
    return dispatch(receiveUser(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
