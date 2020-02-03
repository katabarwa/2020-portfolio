import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen.jsx";

class App extends Component {
  renderHomeScreen = () => {
    return <HomeScreen />;
  };
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderHomeScreen} />
      </BrowserRouter>
    );
  };
}

export default App;
