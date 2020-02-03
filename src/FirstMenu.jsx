import React, { Component } from "react";

class FirstMenu extends Component {
  render = () => {
    return (
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
          project represents the essential gap between these narratives and the
          realms of personal experience, emphasizing the hegemonic gaze upon
          othered bodies. The gaze becomes a spectacle within itself at the same
          time that the gaze is physically imposed upon the viewer.
        </p>
      </div>
    );
  };
}

export default FirstMenu;
