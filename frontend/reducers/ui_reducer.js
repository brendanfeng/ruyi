import {
  RECEIVE_HEADER
} from '../actions/ui_actions';

import { merge } from 'lodash';

const _defaultState = {};

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HEADER:
      const publicCount = action.indexHeader.publicCount;
      const usersCount = action.indexHeader.usersCount;
      const fundedCount = action.indexHeader.fundedCount;
      return merge({}, state, {indexHeader: {publicCount, usersCount, fundedCount}});
    default:
      return state;
  }
};

export default uiReducer;
