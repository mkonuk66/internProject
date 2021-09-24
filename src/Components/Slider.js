import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderImage = (props) => (
  <div>
    <img
      src={props.sliders.sliderImage.base64}
      alt="slider"
      id="sliderImages"
    />
  </div>
);

class Slider extends Component {
  sliderList() {
    let sortedSlider = []
      .concat(this.props.sliders)
      .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
    return sortedSlider.map((currentslider) => {
      return <SliderImage sliders={currentslider} key={currentslider._id} />;
    });
  }
  render() {
    return (
      <div className="slider">
        {" "}
        <div className="mobileDiv" />
        <Carousel infiniteLoop={1} autoPlay={1} showThumbs={0} showStatus={0}>
          {this.sliderList()}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
