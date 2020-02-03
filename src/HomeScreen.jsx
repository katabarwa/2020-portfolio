import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";

class HomeScreen extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Project1 />

        <div className="project-2">
          <div className="flex-title">
            <p>NEW PATH – ESSAIE PAS</p>
            <p className="italics">
              Single Future Parlé, Cd Case & Vinyl Cover Design
            </p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/new-path.jpg" />
            <img width="100%" src="/new-path.png" />
            <img width="100%" src="/futur-parle.jpg" />
          </div>
        </div>
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
