import {
  RECEIVE_HEADER
} from '../actions/ui_actions';

import { merge } from 'lodash';

const _defaultState = {};

const headerReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HEADER:
      const publicCount = action.publicCount;
      const usersCount = action.usersCount;
      const fundedCount = action.fundedCount;
      return merge({}, state, {publicCount, usersCount, fundedCount});
    default:
      return state;
  }
};

export default headerReducer;
