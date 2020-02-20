import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project12 extends Component {
  render = () => {
    return (
      <Link
        to={"/project12/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>AESTHETIC EXPERIENCE</p>
            <p className="italics">
              Book Exploring Form in the Context of Occupying a Liminal Space
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project12;
