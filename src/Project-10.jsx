import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project10 extends Component {
  render = () => {
    return (
      <Link
        to={"/project10/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>SPENDR</p>
            <p className="italics">Full Stack Market Place</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project10;
