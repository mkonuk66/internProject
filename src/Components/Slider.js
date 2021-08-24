import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <div className="slider">
        {" "}
        <div className="mobileDiv" />
        <Carousel
          infiniteLoop={1}
          autoPlay={1}
          centerMode={1}
          showThumbs={0}
          showStatus={0}
        >
          <div>
            <img
              src="./images/slider/slider4.jpg"
              alt="slider"
              className="sliderImages"
            />
          </div>
          <div>
            <img
              src="./images/slider/slider3.jpg"
              alt="slider"
              className="sliderImages"
            />
          </div>
          <div>
            <img
              src="./images/slider/slider1.jpg"
              alt="slider"
              className="sliderImages"
            />
          </div>
          <div>
            <img
              src="./images/slider/slider2.jpg"
              alt="slider"
              className="sliderImages"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
