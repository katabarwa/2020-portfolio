import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render = () => {
    return (
      <div className="header">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>JESSE KATABARWA</p>{" "}
        </Link>
        <Link to={"/about/"} style={{ textDecoration: "none" }}>
          <button>ABOUT</button>
        </Link>
      </div>
    );
  };
}

export default Header;
