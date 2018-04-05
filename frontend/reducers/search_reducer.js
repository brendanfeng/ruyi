import {
  RECEIVE_INDEX
} from '../actions/project_actions';

import { merge } from 'lodash';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_INDEX:
      return merge([], action.ranks);
    default:
      return state;
  }
};

export default searchReducer;
