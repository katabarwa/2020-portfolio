import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render = () => {
    return (
      <div className="flex-about">
        <p className="about">
          Jesse Katabarwa is a creative technologist, an art director, type
          designer, illustrator working in the field of visual communication.
          His work has been exhibited as part of the 100 beste plakate
          exhibition that took place in Austria, Switzerland and at the
          Kulturforum in Berlin. He’s been awarded for best student work at the
          Weltformat 14 Plakatfestival in Luzern, Switzerland. His work has been
          published by multiple magazines such has Pica, Tunica, IDpure, HORT 20
          years Comic and Mold Magazine. Some of his work has been screened at
          Centre Phi, Centre de Design and at la Cinémathèque Québécoise. During
          his time at SSENSE he was part of an highly creative and radical
          thinking team and realized projects at the frontier of technology,
          culture and fashion working with international clients such as David
          Chipperfield Architects. Worked on an array of activations from visual
          communication to wayfinding, rebranding, editorial and art direction.
          Selected clients include Arca, Reebok, Drake Scorpio Tour, Virgil
          Abloh, SSENSE and 032c.
        </p>
        <div className="flex-education">
          <p className="education">
            <span>EDUCATION</span> <br />
            2019 <br />
            Concordia <br />
            Decode Mtl <br />
            <br />
            2017 <br />
            A School A Park,
            <br />
            International <br />
            Design Workshop
          </p>
          <p className="education" id="margin-left">
            2012 - 2015 <br />
            Undergraduate,
            <br />
            Graphic Design
            <br />
            UQAM
            <br />
            <br />
            2013 <br />
            Architecture
            <br /> Workshop, BTU <br />
            in Cottbuss, DE
          </p>
          <p className="education">
            <span>CONTACT</span>
            <br />
            <a
              href="mailto:jessekatabarwa@gmail.com"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer"
              }}
            >
              jessekatabarwa@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  };
}

export default About;
