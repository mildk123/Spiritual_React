import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide1 from "../../Assets/slider1.jpg";
import Slide2 from "../../Assets/slider2.jpg";
import Slide3 from "../../Assets/slider3.jpg";
class CarouselSlider extends Component {
  render() {
    return (
      <Carousel
      showStatus = {false}
      showIndicators = {false}
      showThumbs = {false}
      infiniteLoop = {true}
      autoPlay
      interval = {3000}
      stopOnHover= {false}
      transitionTime={700}
      dynamicHeight = {true}
      >
        <div>
          <img src={Slide1} />
        </div>
        <div>
          <img src={Slide2} />
        </div>
        <div>
          <img src={Slide3} />
        </div>
      </Carousel>
    );
  }
}

export default CarouselSlider;
