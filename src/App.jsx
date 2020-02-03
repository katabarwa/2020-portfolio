import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";
import Header from "./Header.jsx";
import Project1 from "./Project-1.jsx";
import Project2 from "./Project-2.jsx";

class App extends Component {
  renderHomeScreen = () => {
    return <HomeScreen />;
  };
  renderProject1 = () => {
    return (
      <>
        <Header />
        <div className="project-1">
          <div className="flex-title">
            <p>DIASPHORA</p>
            <p className="italics">Triptych on Diasporic Identities</p>
          </div>
          <img width="100%" src="/diasphora.png" />
          <p className="text">
            diasphora (adj.) diaspora + dyphoria The unease or feeling of having
            no sense of home; forever displaced, forever the other, without any
            sense of self; a blurred identity, a dismantling of the body.
            <br />
            Diasphora is a research project in exploring the ways that black and
            east asian identities are interpolated by mainstream narratives. The
            project represents the essential gap between these narratives and
            the realms of personal experience, emphasizing the hegemonic gaze
            upon othered bodies. The gaze becomes a spectacle within itself at
            the same time that the gaze is physically imposed upon the viewer.
          </p>
        </div>
        <Project2 />
        <div className="project-3">
          <div className="flex-title">
            <p>SSENSE SSPHERE</p>
            <p className="italics">Poster Design for International Panel</p>
          </div>
          {/* <img width="100%" src="/ssphere.jpg" /> */}
        </div>
      </>
    );
  };

  renderProject2 = () => {
    return (
      <>
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
          {/* <img width="100%" src="/ssphere.jpg" /> */}
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
      </BrowserRouter>
    );
  };
}

export default App;
