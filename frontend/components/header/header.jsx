import React from 'react';
import { Link } from 'react-router-dom';

import FormButtonContainer from './form_button_container';

export default class Header extends React.Component {

  render() {
    return (
      <header className="nav-container">
        <section className="nav-left-container">
          <Link className="header-link" to="/">Discover</Link>
          <Link className="header-link" to="/">Start Project</Link>
        </section>
        <Link to="/" className="logo">RUYI</Link>
        <section className="nav-right-container">
          <span className="search-bar">
            Search
            <i className="material-icons">search</i>
          </span>
          <FormButtonContainer />
        </section>
      </header>
    );
  }
}

// NB: ADD PROFILE DROPDOWN
// NB: SEARCH FILLS UP HEADER ON CLICK, TURNS INTO MODAL ON CHANGE
