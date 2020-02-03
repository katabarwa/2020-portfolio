import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project2 extends Component {
  render = () => {
    return (
      <Link
        to={"/project2/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>NEW PATH – ESSAIE PAS</p>
            <p className="italics">
              Single Future Parlé, Cd Case & Vinyl Cover Design
            </p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project2;
