import React from 'react';
import { Link } from 'react-router-dom';

const FormButton = ({loggedIn, logout}) => (
  loggedIn ? (
    <button className="header-link" onClick={ () => logout() }>Sign Out</button>
    ) : (
    <Link className="header-link" to="/login">Sign In</Link>
    )
);

export default FormButton;
