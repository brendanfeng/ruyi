import * as APIUtil from '../util/ui_util';

export const RECEIVE_HEADER = "RECEIVE_HEADER";

export const receiveHeader = ({publicCount, usersCount, fundedCount}) => {
  return {
    type: RECEIVE_HEADER,
    publicCount,
    usersCount,
    fundedCount,
  };
};

export const fetchHeader = () => dispatch => {
  return APIUtil.fetchHeader().then(header => {
    return dispatch(receiveHeader(header));
  });
};
