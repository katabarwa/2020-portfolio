import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";
import Project3 from "./Project-3.jsx";

class HomeScreen extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    );
  };
}

export default HomeScreen;
