import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";

class HomeScreen extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Project1 />
        <Project2 />
        <div className="project-3">
          <div className="flex-title">
            <p>SSENSE SSPHERE</p>
            <p className="italics">Poster Design for International Panel</p>
          </div>
          <img width="100%" src="/ssphere.jpg" />
        </div>
      </div>
    );
  };
}

export default HomeScreen;
