import React, { Component } from "react";

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
    <tr className="tr">
      <td className="eventDate">
        <cite>{props.events.eventDate.split("-")[2]}</cite>
        <cite>{MonthChanger(props.events.eventDate.split("-")[1])}</cite>
      </td>
      <td>
        <p>{`${
          props.events.title.split(" ").length <= 5
            ? props.events.title
            : props.events.title.split(" ")[0] +
              " " +
              props.events.title.split(" ")[1] +
              " " +
              props.events.title.split(" ")[2] +
              " " +
              props.events.title.split(" ")[3] +
              " " +
              props.events.title.split(" ")[4] +
              " " +
              "..."
        }
        `}</p>
      </td>
    </tr>
    <br />
  </a>
);

export default class Events extends Component {
  eventList() {
    let sortedEvent = []
      .concat(this.props.events)
      .sort((a, b) => (a.eventDate < b.eventDate ? 1 : -1));
    return sortedEvent.map((currentevent, i) => {
      let lastIndex = this.props.events.length;
      if (lastIndex === i + lastIndex) {
        return <Event events={currentevent} key={currentevent._id} />;
      } else if (lastIndex + 1 === i + lastIndex) {
        return <Event events={currentevent} key={currentevent._id} />;
      } else if (lastIndex + 2 === i + lastIndex) {
        return <Event events={currentevent} key={currentevent._id} />;
      }
    });
  }

  render() {
    return (
      <div>
        <h4 className="eventTitle">Etkinlikler</h4>

        <table className="event">
          {this.eventList()}
          <tr>
            <td></td>
            <td></td>
            <td>
              <a href="/event"> Daha fazlası </a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
