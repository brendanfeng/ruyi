import React from 'react';
import { Link } from 'react-router-dom';

const FormButton = ({currentUser, logout}) => (
  currentUser ? (
    <button className="header-user-menu" onClick={ () => logout() }>
      { /* <i className="material-icons">account_circle</i> */ }
      Sign Out
    </button>
    ) : (
    <Link className="header-link" to="/login">Sign In</Link>
    )
);

export default FormButton;
