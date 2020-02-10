import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project4 extends Component {
  render = () => {
    return (
      <Link
        to={"/project4/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>ARCA / TORMENTA</p>
            <p className="italics">
              Activation for SSENSE Flagship Store Launch
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project4;
