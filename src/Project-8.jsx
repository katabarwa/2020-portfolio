import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project8 extends Component {
  render = () => {
    return (
      <Link
        to={"/project8/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>BODY QUALM</p>
            <p className="italics">
              Serie that Explore the Gab Between Class and Race Identities
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project8;
