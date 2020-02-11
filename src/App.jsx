import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";
import Project3 from "./Project-3.jsx";
import Project4 from "./Project-4.jsx";
import Project5 from "./Project-5.jsx";
import Project6 from "./Project-6.jsx";
import Project7 from "./Project-7.jsx";
import Project8 from "./Project-8.jsx";
import About from "./About.jsx";
import Project9 from "./project-9.jsx";
import Project10 from "./Project-10.jsx";

class App extends Component {
  renderHomeScreen = () => {
    return <HomeScreen />;
  };

  renderAbout = () => {
    return (
      <>
        <Header />
        <About />
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
      </>
    );
  };

  renderProject1 = () => {
    return (
      <>
        <Header />
        <div className="projects">
          <div className="block-title">
            <p>DIASPHORA</p>
            <p className="italics">Triptych on Diasporic Identities</p>
            <p className="text">
              diasphora (adj.) diaspora + dyphoria The unease or feeling of
              having no sense of home; forever displaced, forever the other,
              without any sense of self; a blurred identity, a dismantling of
              the body.
            </p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/diasphora.png" />
          </div>
        </div>
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject2 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <div className="projects">
          <div className="block-title">
            <p>NEW PATH – ESSAIE PAS</p>
            <p className="italics">
              Single Future Parlé, Cd Case & Vinyl Cover Design
            </p>
          </div>
          <div className="flex-imgs" id="img50">
            <img width="100%" src="/new-path.jpg" />
            <img width="100%" src="/new-path.png" />
            <img width="100%" src="/futur-parle.jpg" />
          </div>
        </div>
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject3 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <div className="projects">
          <div className="block-title">
            <p>SSENSE SSPHERE</p>
            <p className="italics">Poster Design for International Panel</p>
          </div>
          <div className="flex-imgs" id="img60">
            <img width="100%" src="/ssphere.jpg" />
          </div>
        </div>
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject4 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <div className="projects">
          <div className="block-title">
            <p>ARCA / TORMENTA</p>
            <p className="italics">
              Activation for SSENSE Flagship Store Launch
            </p>
            <p className="text">Conception with James Oh.</p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/ARCA.jpeg" />
          </div>
        </div>
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject5 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <div className="projects">
          <div className="block-title">
            <p>REEBOK</p>
            <p className="italics">
              Footwear Collaboration
              <br /> Between SSENSE & Reebok
            </p>
            <p className="text">
              Conception with Victoria Rebello. Photography by Alex Blouin
            </p>
          </div>
          <div className="flex-imgs" id="img60">
            <img width="100%" src="/reebok.jpg" />
          </div>
        </div>
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject6 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <div className="projects">
          <div className="block-title">
            <p>HYPER__</p>
            <p className="italics">
              Pamphlet & Website for a Call for Submissions
            </p>
          </div>
          <div className="flex-imgs">
            <img width="150%" src="/hyper0.png" />
            <img width="150%" src="/hyper.png" />
            <img width="100%" src="/hyper1.png" />
            <img width="100%" src="/hyper2.png" />
          </div>
        </div>
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };

  renderProject7 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <div className="projects">
          <div className="block-title">
            <p>DISEMBODIED STILLS</p>
            <p className="italics">Poster Serie Exploring Color & Form</p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/body.jpg" />
            <img width="100%" src="/body0.jpg" />
            <img width="100%" src="/body1.jpg" />
          </div>
        </div>
        <Project8 />
        <Project9 />
        <Project10 />
      </>
    );
  };
  renderProject8 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <div className="projects">
          <div className="block-title">
            <p>BODY QUALM</p>
            <p className="italics">
              Serie that Explore the Gab Between Class and Race Identities
            </p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/bodyqualm.jpg" />
          </div>
        </div>
        <Project9 />
        <Project10 />
      </>
    );
  };
  renderProject9 = () => {
    return (
      <>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <div className="projects">
          <div className="block-title">
            <p>AFILASI</p>
            <p className="italics">Full Stack Library of Extracted Texts</p>
            <a
              href="https://afilasi.herokuapp.com/"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer"
              }}
            >
              <p className="text">https://afilasi.herokuapp.com/</p>
            </a>
          </div>
          <div className="flex-imgs">
            <a href="https://afilasi.herokuapp.com/">
              <img width="100%" src="/afilasi.png" />
            </a>
          </div>
          <div className="link"></div>
        </div>
        <Project10 />
      </>
    );
  };
  renderProject10 = () => {
    return (
      <>
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
        <div className="projects">
          <div className="block-title">
            <p>SPENDR</p>
            <p className="italics">Full Stack Market Place</p>
            <a
              href="https://www.youtube.com/watch?v=pCwj1fLJXy8"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer"
              }}
            >
              <p className="text">
                https://www.youtube.com/watch?v=pCwj1fLJXy8
              </p>
            </a>
          </div>
          <div className="flex-imgs">
            <a href="https://www.youtube.com/watch?v=pCwj1fLJXy8">
              <img width="100%" src="/spendr.png" />
            </a>
          </div>
          <div className="link"></div>
        </div>
      </>
    );
  };
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderHomeScreen} />
        <Route exact={true} path="/about/" render={this.renderAbout} />
        <Route exact={true} path="/project1/" render={this.renderProject1} />
        <Route exact={true} path="/project2/" render={this.renderProject2} />
        <Route exact={true} path="/project3/" render={this.renderProject3} />
        <Route exact={true} path="/project4/" render={this.renderProject4} />
        <Route exact={true} path="/project5/" render={this.renderProject5} />
        <Route exact={true} path="/project6/" render={this.renderProject6} />
        <Route exact={true} path="/project7/" render={this.renderProject7} />
        <Route exact={true} path="/project8/" render={this.renderProject8} />
        <Route exact={true} path="/project9/" render={this.renderProject9} />
        <Route exact={true} path="/project10/" render={this.renderProject10} />
      </BrowserRouter>
    );
  };
}

export default App;
