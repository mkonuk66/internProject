import React, { Component } from "react";
import Events from "./Events";
import News from "./News";
import Notifications from "./Notification";
import Slider from "./Slider";
import Style from "./Yobu";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Style />
        <div className="homepageBlocks">
          <div className="homepageBlock">
            <Notifications
              {...this.props}
              notifications={this.props.notifications}
              getNotificationsDataFromDatabase={
                this.props.getNotificationsDataFromDatabase
              }
            />{" "}
          </div>{" "}
          <hr className="homepageHr" />{" "}
          <div className="homepageBlock">
            {" "}
            <Events
              {...this.props}
              events={this.props.events}
              getEventDataFromDatabase={this.props.getEventDataFromDatabase}
            />
          </div>
        </div>
        <br />
        <hr />
        <News
          {...this.props}
          news={this.props.news}
          getNewsDataFromDatabase={this.props.getNewsDataFromDatabase}
        />
      </div>
    );
  }
}
