import {
  RECEIVE_INDEX,
} from '../actions/project_actions';

import { CLEAR_SEARCH } from '../actions/ui_actions';

import { merge } from 'lodash';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_INDEX:
      return merge([], action.ranks);
    case CLEAR_SEARCH:
      return [];
    default:
      return state;
  }
};

export default searchReducer;
