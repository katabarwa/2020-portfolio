import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project11 extends Component {
  render = () => {
    return (
      <Link
        to={"/project11/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>JAYMI SILK</p>
            <p className="italics">
              Illustration and Custom Typeface for Cover Album
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project11;
