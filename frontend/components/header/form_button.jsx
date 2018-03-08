import React from 'react';
import { Link } from 'react-router-dom';

const FormButton = ({loggedIn, logout}) => (
  loggedIn ? (
    <button className="header-user-menu" onClick={ () => logout() }>
      <i className="material-icons">mood</i>
    </button>
    ) : (
    <Link className="header-link" to="/login">Sign In</Link>
    )
);

export default FormButton;
