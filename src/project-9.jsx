import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project9 extends Component {
  render = () => {
    return (
      <Link
        to={"/project9/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>AFILASI</p>
            <p className="italics">Full Stack Library of Extracted Texts</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project9;