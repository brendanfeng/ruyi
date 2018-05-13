import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import HomepageContainer from './homepage/homepage_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateProjectContainer from './project_form/create_project_container';
import EditProjectContainer from './project_form/edit_project_container';
import ShowProjectContainer from './projects/project_show_container';
import DiscoverContainer from './discover/discover_container';
import Footer from './footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <HeaderContainer />
    <Route exact path="/" component={HomepageContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/projects/create/"
      component={CreateProjectContainer} />
    <ProtectedRoute path="/projects/update/:projId/"
      component={EditProjectContainer} />
    <Route exact path="/projects/show/:projId/"
      component={ShowProjectContainer} />
    <Route path="/discover/:category/"
      component={DiscoverContainer} />
    <Footer />
  </div>
);

export default App;
