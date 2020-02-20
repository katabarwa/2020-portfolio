import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";
import Project3 from "./Project-3.jsx";
import Project4 from "./Project-4.jsx";
import Project5 from "./Project-5.jsx";
import Project6 from "./Project-6.jsx";
import Project7 from "./Project-7.jsx";
import Project8 from "./Project-8.jsx";
import Project9 from "./project-9.jsx";
import Project10 from "./Project-10.jsx";
import Project11 from "./Project-11.jsx";
import Project12 from "./Project-12.jsx";

class HomeScreen extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
        <Project11 />
        <Project12 />
      </div>
    );
  };
}

export default HomeScreen;
