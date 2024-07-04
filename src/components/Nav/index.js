import React from "react";
import { Link } from "react-router-dom";

import './index.css'

const Nav = () => {
  return (
    <div className="nav-bg-container d-flex flex-row justify-content-around">
      <Link to="/" className="link">
        Add
      </Link>
      <Link to="/view" className="link">
        View
      </Link>
    </div>
  );
};

export default Nav;
