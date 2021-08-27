import React, { Component } from "react";
import Events from "./Events";
import News from "./News";
import Notice from "./Notice";
import Slider from "./Slider";
import Style from "./Yobu";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Style />
        <div className="homepageBlocks">
          <Notice /> <hr className="homepageHr" />
          <Events />
        </div>
        <br />
        <hr />
        <News />
      </div>
    );
  }
}
