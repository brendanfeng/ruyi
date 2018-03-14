import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Header from './header/header';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateProjectContainer from './project_form/create_project_container';
import EditProjectContainer from './project_form/edit_project_container';
import ShowProjectContainer from './projects/project_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Header />
      <div className="app-body">
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/projects/create/"
          component={CreateProjectContainer} />
        <ProtectedRoute path="/projects/update/:projId/"
          component={EditProjectContainer} />
        <Route exact path="/projects/show/:projId/"
          component={ShowProjectContainer}/>
      </div>
  </div>
);

export default App;
