import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import Header from './header/header';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateProjectContainer from './project_form/create_project_container';
import EditProjectContainer from './project_form/edit_project_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Header />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/projects/:projId/form/create" component={CreateProjectContainer} />
    <ProtectedRoute path="/projects/:projId/form/update" component={EditProjectContainer} />
  </div>
);

export default App;
