import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

export default class Header extends React.Component {



  render() {
    return (
      <header className="header-container">
        <span className="logo">RUYI</span>
      </header>
    );
  }
}
