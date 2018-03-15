import { merge } from 'lodash';

import {
  RECEIVE_PROJECT,
  RECEIVE_INDEX,
 } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge(
        {}, state,
        {[action.payload.creator.id]: action.payload.creator}
      );
    case RECEIVE_INDEX:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge(
        {}, state,
        {[action.user.id]: action.user}
      );
    default:
      return state;
  }
};

export default usersReducer;
