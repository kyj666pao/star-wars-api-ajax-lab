import React from "react";
import { Link } from "react-router-dom";

// css
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="link">
        <Link to={"/starships"}>Star Wars Starships</Link>
      </div>
    </nav>
  );
};

export default Nav;
