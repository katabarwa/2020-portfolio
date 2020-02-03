import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project1 extends Component {
  render = () => {
    return (
      <Link
        to={"/project1/"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="projects">
          <div className="flex-title">
            <p>DIASPHORA</p>
            <p className="italics">Triptych on Diasporic Identities</p>
          </div>
        </div>
      </Link>
    );
  };
}

export default Project1;
