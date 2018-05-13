import * as APIUtil from "../util/ui_util";

export const RECEIVE_HEADER = "RECEIVE_HEADER";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const SEARCH_BAR = "SEARCH_BAR";

export const receiveHeader = ({publicCount, usersCount, fundedCount}) => {
  return {
    type: RECEIVE_HEADER,
    publicCount,
    usersCount,
    fundedCount
  };
};

export const setSearchBar = searchBar => {
  return {
    type: SEARCH_BAR,
    searchBar
  };
};

export const clearSearch = {
  type: CLEAR_SEARCH
};

export const fetchHeader = () => dispatch => {
  return APIUtil.fetchHeader().then(header => {
    return dispatch(receiveHeader(header));
  });
};

export const searchLimited = query => dispatch => {
  return APIUtil.searchLimited(query).then(
    projects => {
      return dispatch(setSearchBar(projects));
    },
    err => {
      return err.responseJSON;
    }
  );
};
