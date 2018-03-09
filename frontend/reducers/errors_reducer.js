import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import projects from './project_errors_reducer';
import users from './user_errors_reducer';

export default combineReducers({
  session,
  projects,
  users,
});
