import React, { Component } from "react";
import Parallax from "../../Assets/Images/Parallax-img.png";
export class Stepper extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#E9F3E1",
          width: "98vw",
          height: "210%",
          padding: "5%",

          backgroundImage: `url(${Parallax})`,
          backgroundSize: "110%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div>
          <div>
            <h3>Common Questions About Acupuncture Treatment</h3>
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>

      
      </div>
    );
  }
}

export default Stepper;
