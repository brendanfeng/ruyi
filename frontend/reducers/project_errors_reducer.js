import { merge } from 

import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return merge()
    case RECEIVE_PROJECT:
      return [];
    case REMOVE_PROJECT:
      return [];
    default:
      return state;
  }
};
