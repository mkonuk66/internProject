import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

const getEventId = window.location.pathname.split("/");
const eventId = getEventId[2];

const Detail = (props) => (
  <div className="container d-flex justify-content-center align-items-center text-center flex-column mt-5 mb-5">
    <img
      src={
        props.events.eventImage[0].base64 === null
          ? "/images/news/1.jpg"
          : props.events.eventImage[0].base64
      }
      alt="eventDetail"
      className="detailPageImage mb-3"
    />
    <h2 className="detailPageTitle">{props.events.title}</h2>

    <span className="detailPageDate">
      Etkinlik Tarih : {props.events.eventDate}
    </span>
    <div className="detailPageText">
      {ReactHtmlParser(`${props.events.content}`)}
    </div>
    <a
      href="/event"
      className="btn btn-danger btn-lg d-inline justify-content-center"
    >
      Geri Dön
    </a>
  </div>
);

export default class EventDetail extends Component {
  eventsList() {
    return this.props.events.map((currentevent) => {
      if (currentevent._id === eventId) {
        return <Detail events={currentevent} key={currentevent._id} />;
      } else {
      }
    });
  }
  render() {
    return (
      <div>
        <div className="pageDiv" />
        {this.eventsList()}
      </div>
    );
  }
}
