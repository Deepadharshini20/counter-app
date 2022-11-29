import React, { Component } from "react";

//stateless functional component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#t">
        Navbar{" "}
        <span className="badge rounded-pill text-bg-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
