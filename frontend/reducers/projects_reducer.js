import { merge } from 'lodash';

import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
  RECEIVE_INDEX,
} from '../actions/project_actions';

const projectsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_INDEX:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge(
        {},
        {[action.payload.project.id]: action.payload.project}
      );
    case REMOVE_PROJECT:
      const newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
