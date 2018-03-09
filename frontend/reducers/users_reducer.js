import { merge } from 'lodash';

import {
  RECEIVE_PROJECT,
 } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge(
        {},
        {[action.payload.creator.id]: action.payload.creator}
      );
    case RECEIVE_USER:
      return merge(
        {},
        {[action.user.id]: action.user}
      );
    default:
      return state;
  }
};
