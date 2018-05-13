import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';

import FormButtonContainer from './form_button_container';
import SearchBar from './search_bar';

const Header = ({searchBar, setSearchBar, searchResults}) => {
  return (
    searchBar
    ? <SearchBar setSearchBar={setSearchBar} searchResults={searchBar}/>
    : (<header className="nav-container">
      <nav className="nav-left-container">
        <Link className="header-link" to="/discover/all/">Discover</Link>
        <Link className="header-link" to="/projects/create/basics">Start Project</Link>
      </nav>
      <Link to="/">
        <Image publicId="imageedit_2_8651322983"></Image>
      </Link>
      <nav className="nav-right-container">
        <span className="search-bar" onClick={() => setSearchBar([])}>
          Search
          <i className="material-icons">search</i>
        </span>
        <FormButtonContainer/>
      </nav>
    </header>));
};

export default Header;
// NB: ADD PROFILE DROPDOWN