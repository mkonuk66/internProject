import React, { Component } from "react";
import { Container } from "reactstrap";
import Nav from "./Navbar";
import Footer from "./Footer";

function MonthChanger(a) {
  switch (a) {
    case "01":
      return (a = "Ocak");
    case "02":
      return (a = "Şubat");
    case "03":
      return (a = "Mart");
    case "04":
      return (a = "Nisan");
    case "05":
      return (a = "Mayıs");
    case "06":
      return (a = "Haziran");
    case "07":
      return (a = "Temmuz");
    case "08":
      return (a = "Ağustos");
    case "09":
      return (a = "Eylül");
    case "10":
      return (a = "Ekim");
    case "11":
      return (a = "Kasım");
    case "12":
      return (a = "Aralık");
    default:
      a = " ";
  }
}

const Event = (props) => (
  <a href={"/eventDetail/" + props.events._id}>
    {" "}
    <tr>
      <td className="eventDate">
        <cite>{props.events.eventDate.split("-")[2]}</cite>
        <cite>{MonthChanger(props.events.eventDate.split("-")[1])}</cite>
      </td>
      <td>
        <p className="allEventP">{props.events.title}</p>
      </td>
    </tr>
    <br />
  </a>
);

export default class AllEvents extends Component {
  eventList() {
    return this.props.events.reverse().map((currentevent, i) => {
      return <Event events={currentevent} key={currentevent._id} />;
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="pageDiv"></div>
        <div>
          <Container>
            <h4 className="eventTitle">Etkinlikler</h4>

            <table className="event">{this.eventList()}</table>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
