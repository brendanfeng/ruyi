import {
  UPDATE_CURRENT_PROJECT
} from '../actions/ui_actions';

const uiReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_CURRENT_PROJECT:
      return Object.assign({}, {currentProject: action.currentProject});
    default:
      return state;
  }
};

export default uiReducer;
