import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';

import FormButtonContainer from './form_button_container';
import SearchBar from './search_bar';

const renderSearchBar = (setSearchBar) => {
  // onClick={() => setSearchBar([])}
  return (<Link className="search-bar" to="/discover/all">
    Search
    <i className="material-icons">search</i>
  </Link>);
};

const Header = ({searchBar, setSearchBar, searchLimited}) => {
  return (
    searchBar
    ? <SearchBar setSearchBar={setSearchBar} searchResults={searchBar} searchLimited={searchLimited}/>
    : (<header className="nav-container">
      <nav className="nav-left-container">
        <Link className="header-link" to="/discover/all/">Discover</Link>
        <Link className="header-link" to="/projects/create/basics">Start Project</Link>
      </nav>
      <Link to="/">
        <Image publicId="imageedit_2_8651322983"></Image>
      </Link>
      <nav className="nav-right-container">
        {renderSearchBar(setSearchBar)}
        <FormButtonContainer/>
      </nav>
    </header>));
};

export default Header;
// NB: ADD PROFILE DROPDOWN