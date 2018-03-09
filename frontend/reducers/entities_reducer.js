import { combineReducers } from 'redux';

import users from './users_reducer';
import projects from './projects_reducer';

export default combineReducers({
  projects,
  users,
});
