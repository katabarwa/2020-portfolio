import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project5 extends Component {
  render = () => {
    return (
      <Link
        to={"/project5/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>REEBOK</p>
            <p className="italics">Footwear Collaboration Between SSENSE & Reebok</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project5;