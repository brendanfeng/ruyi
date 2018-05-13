import {SEARCH_BAR} from "../actions/ui_actions";

const searchBarReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SEARCH_BAR:
      return action.searchBar;
    default:
      return state;
  }
};

export default searchBarReducer;
