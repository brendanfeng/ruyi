import { merge } from 'lodash';

import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_INDEX,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';

const _defaultState = {
  title: [],
  image: [],
  blurb: [],
  story: [],
  category: [],
  goal: [],
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return merge(
        {},
        {
        title: action.errors.title,
        image: action.errors.image,
        blurb: action.errors.blurb,
        story: action.errors.story,
        category: action.errors.category,
        goal: action.errors.goal
        }
      );
    case RECEIVE_PROJECT:
    case REMOVE_PROJECT:
    case RECEIVE_INDEX:
      return {
        title: [],
        image: [],
        blurb: [],
        story: [],
        category: [],
        goal: []
      };
    default:
      return state;
  }
};
