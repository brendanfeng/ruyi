import APIUtil from '../util/ui_util'

export const RECEIVE_HEADER = "RECEIVE_HEADER";

export const receiveHeader = (indexHeader) => {
  return {
    type: RECEIVE_HEADER,
    indexHeader
  };
};

export const fetchHeader = () => dispatch => {
  return APIUtil.fetchHeader().then(header => {
    return dispatch(receiveHeader(header));
  });
};
