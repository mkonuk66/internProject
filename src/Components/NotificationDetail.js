import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

const getNotificationId = window.location.pathname.split("/");
const notificationId = getNotificationId[2];

const DetailNotification = (props) => (
  <div className="container d-flex justify-content-center align-items-center text-center flex-column mt-5 mb-5">
    <img
      src={
        props.notifications.notificationImage.base64 === null
          ? "/images/news/1.jpg"
          : props.notifications.notificationImage.base64
      }
      alt="notificationImage"
      width="50%"
      className="mb-3"
    />
    <h2 className="display-6">{props.notifications.title}</h2>

    <span style={{ fontWeight: "300", fontStyle: "italic" }}>
      Etkinlik Tarih : {props.notifications.notificationDate}
    </span>
    <div style={{ fontSize: "25px", fontWeight: "100", textAlign: "justify" }}>
      {ReactHtmlParser(`${props.notifications.content}`)}
    </div>
    <a
      href="/notification"
      className="btn btn-danger btn-lg d-inline justify-content-center"
    >
      Geri Dön
    </a>
  </div>
);

export default class NotificationDetail extends Component {
  notificationsList() {
    return this.props.notifications.map((currentnotifications) => {
      if (currentnotifications._id === notificationId) {
        return (
          <DetailNotification
            notifications={currentnotifications}
            key={currentnotifications._id}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <div className="pageDiv" />
        {this.notificationsList()}
      </div>
    );
  }
}
