import {connect} from 'react-redux';
import React from 'react';

import {setSearchBar} from '../../actions/ui_actions';
import Header from './header';

const mapStateToProps = state => {
  return {searchBar: state.ui.searchBar};
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchBar: (searchBar) => dispatch(setSearchBar(searchBar))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
