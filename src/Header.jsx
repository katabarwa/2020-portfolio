import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render = () => {
    return (
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="header">
          <p>JESSE KATABARWA</p>
          <button>ABOUT</button>
        </div>
      </Link>
    );
  };
}

export default Header;
