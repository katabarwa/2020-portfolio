import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";
import Project3 from "./Project-3.jsx";

class App extends Component {
  renderHomeScreen = () => {
    return <HomeScreen />;
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
              <br />
              <br />
              Diasphora is a research project in exploring the ways that black
              and east asian identities are interpolated by mainstream
              narratives. The project represents the essential gap between these
              narratives and the realms of personal experience, emphasizing the
              hegemonic gaze upon othered bodies. The gaze becomes a spectacle
              within itself at the same time that the gaze is physically imposed
              upon the viewer.
            </p>
          </div>
          <div className="flex-imgs">
            <img width="100%" src="/diasphora.png" />
          </div>
        </div>
        <Project2 />
        <Project3 />
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
          <div className="flex-imgs">
            <img width="100%" src="/new-path.jpg" />
            <img width="100%" src="/new-path.png" />
            <img width="100%" src="/futur-parle.jpg" />
          </div>
        </div>
        <Project3 />
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
          <div className="flex-imgs">
            <img width="100%" src="/ssphere.jpg" />
          </div>
        </div>
      </>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderHomeScreen} />
        <Route exact={true} path="/project1/" render={this.renderProject1} />
        <Route exact={true} path="/project2/" render={this.renderProject2} />
        <Route exact={true} path="/project3/" render={this.renderProject3} />
      </BrowserRouter>
    );
  };
}

export default App;
