import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project3 extends Component {
  render = () => {
    return (
      <Link
        to={"/project3/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="project-3">
          <div className="flex-title">
            <p>SSENSE SSPHERE</p>
            <p className="italics">Poster Design for International Panel</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project3;
