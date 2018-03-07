import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <header className="nav-container">
        <section className="nav-left-container"> LEFT SIDE </section>
        <Link to="/" className="logo">RUYI</Link>
        <section className="nav-right-container"> RIGHT SIDE </section>
      </header>
    );
  }
}

// NB: ADD LINK TO DISCOVER
// NB: ADD LINK TO CREATE PROJECT
// NB: ADD LOGIN/LOGOUT BUTTON
// NB: ADD SEARCH ICON THAT TURNS INTO MODAL ON CHANGE
