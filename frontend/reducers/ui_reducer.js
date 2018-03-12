import {
  UPDATE_CURRENT_PROJECT
} from '../actions/ui_actions';

import { merge } from 'lodash';

const _defaultState = {currentProject: {
  title: '',
  img_url: '',
  blurb: '',
  category: 'Design & Tech',
  story: '',
  goal: 100,
  pledged_amount: 0,
  public: false
}};

const uiReducer = (state = _defaultState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case UPDATE_CURRENT_PROJECT:
      return merge({}, state, {currentProject: action.currentProject});
    default:
      return state;
  }
};

export default uiReducer;
