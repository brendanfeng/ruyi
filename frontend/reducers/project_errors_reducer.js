import { merge } from 'lodash';

import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';

const _defaultState = {
  title: [],
  img_url: [],
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
        state,
        {
        title: action.errors.title,
        img_url: ["Image required"],
        blurb: action.errors.blurb,
        story: action.errors.story,
        category: action.errors.category,
        goal: action.errors.goal
        }
      );
    case RECEIVE_PROJECT:
    case REMOVE_PROJECT:
      return {
        title: [],
        img_url: [],
        blurb: [],
        story: [],
        category: [],
        goal: []
      };
    default:
      return state;
  }
};
