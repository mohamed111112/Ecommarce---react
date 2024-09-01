import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [height, setHeight] = useState(0);
  let show = true;
  function toggleNav() {
    if (!height) {
      setHeight(180);
    } else {
      setHeight(0);
    }
  }
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <Link to="/">Start Framework</Link>
        </h1>
        <FaBars className="Show" onClick={toggleNav} />
        <ul style={{height:  height}}>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
