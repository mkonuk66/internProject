import React, { Component } from "react";
import Events from "./Events";
import News from "./News";
import Notice from "./Notice";
import Slider from "./Slider";
import Style from "./Yobu";
import Nav from "./Navbar";
import Footer from "./Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <Style />
        <div className="homepageBlocks">
          <Notice /> <hr className="homepageHr" />
          <Events
            {...this.props}
            events={this.props.events}
            getEventDataFromDatabase={this.props.getEventDataFromDatabase}
          />
        </div>
        <br />
        <hr />
        <News />
        <Footer />
      </div>
    );
  }
}
