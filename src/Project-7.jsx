import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project7 extends Component {
  render = () => {
    return (
      <Link
        to={"/project7/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>DISEMBODIED STILLS</p>
            <p className="italics">Poster Serie Exploring Color & Form</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project7;
