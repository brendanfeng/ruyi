import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import FormButtonContainer from './form_button_container';

export default class Header extends React.Component {

  render() {
    return (
      <header className="nav-container">
        <nav className="nav-left-container">
          <Link className="header-link"
            to="/">Discover</Link>
          <Link className="header-link"
            to="/projects/create/basics">Start Project</Link>
        </nav>
        <Link to="/">
          <Image publicId="imageedit_2_8651322983" ></Image>
        </Link>
        <nav className="nav-right-container">
          <span className="search-bar">
            Search
            <i className="material-icons">search</i>
          </span>
          <FormButtonContainer />
        </nav>
      </header>
    );
  }
}

// NB: ADD PROFILE DROPDOWN
// NB: SEARCH FILLS UP HEADER ON CLICK, TURNS INTO MODAL ON CHANGE
