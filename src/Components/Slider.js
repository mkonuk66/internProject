import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <div className="slider">
        {" "}
        <div className="mobileDiv" />
        <Carousel infiniteLoop={1} autoPlay={1} showThumbs={0} showStatus={0}>
          <div>
            <img src="/images/slider/1.webp" alt="slider" id="sliderImages" />
          </div>
          <div>
            <img src="/images/slider/2.webp" alt="slider" id="sliderImages" />
          </div>
          <div>
            <img src="/images/slider/3.webp" alt="slider" id="sliderImages" />
          </div>
          <div>
            <img src="/images/slider/4.webp" alt="slider" id="sliderImages" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
