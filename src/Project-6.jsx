import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project6 extends Component {
  render = () => {
    return (
      <Link
        to={"/project6/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>HYPER__</p>
            <p className="italics">
              Pamphlet & Website for a Call for Submission
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project6;
