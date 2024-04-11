import React from "react";
import { Link } from "react-router-dom";

const PrincipalHeader = () => {
  return (
    <header>
      <h1>
        <Link to="/"> Hotels-App </Link>
      </h1>
      <nav>
        <ul>
        <li>
            <Link to='/reservations'>Reservations</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
