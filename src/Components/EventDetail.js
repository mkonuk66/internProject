import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Footer from "./Footer";
import Nav from "./Navbar";
import NotFound from "./NotFound";

const getEventId = window.location.pathname.split("/");
const eventId = getEventId[2];

const Detail = (props) => (
  <div className="container d-flex justify-content-center align-items-center text-center flex-column mt-5 mb-5">
    <img
      src={props.events.eventImage[0].base64}
      alt="eventDetail"
      className="mb-3"
    />
    <h2 className="display-6">{props.events.title}</h2>

    <span style={{ fontWeight: "300", fontStyle: "italic" }}>
      Etkinlik Tarih : {props.events.eventDate}
    </span>
    <div style={{ fontSize: "30px" }}>
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
        <NotFound />;
      }
    });
  }
  render() {
    return (
      <div>
        <Nav />

        <div className="pageDiv" />

        {this.eventsList()}
        <Footer />
      </div>
    );
  }
}
