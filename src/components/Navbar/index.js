import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-secondary py-2">
      <nav className="navbar bg-secondary navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          Student Info Using React Redux
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
