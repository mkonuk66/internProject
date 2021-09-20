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

const DetailNotice = (props) => (
  <a href={"/notificationDetail/" + props.notifications._id}>
    <tr className="tr">
      <td className="eventDate">
        <cite>{props.notifications.notificationDate.split("-")[2]}</cite>
        <cite>
          {MonthChanger(props.notifications.notificationDate.split("-")[1])}
        </cite>
      </td>
      <td>
        <p>{`${
          props.notifications.title.split(" ").length <= 5
            ? props.notifications.title
            : props.notifications.title.split(" ")[0] +
              " " +
              props.notifications.title.split(" ")[1] +
              " " +
              props.notifications.title.split(" ")[2] +
              " " +
              props.notifications.title.split(" ")[3] +
              " " +
              props.notifications.title.split(" ")[4] +
              " " +
              "..."
        }`}</p>
      </td>
    </tr>
    <br />
  </a>
);

export default class Notification extends Component {
  notificationList() {
    let sortedNotification = []
      .concat(this.props.notifications)
      .sort((a, b) => (a.notificationDate < b.notificationDate ? 1 : -1));
    let lastIndex = sortedNotification.length;
    return sortedNotification.map((currentnotifications, i) => {
      if (lastIndex === i + lastIndex) {
        return (
          <DetailNotice
            notifications={currentnotifications}
            key={currentnotifications._id}
          />
        );
      } else if (lastIndex + 1 === i + lastIndex) {
        return (
          <DetailNotice
            notifications={currentnotifications}
            key={currentnotifications._id}
          />
        );
      } else if (lastIndex + 2 === i + lastIndex) {
        return (
          <DetailNotice
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
        <h4 className="noticeTitle">Duyurular</h4>

        <table className="notice">
          <br />
          {this.notificationList()}
          <tr>
            <td></td>
            <td></td>
            <td>
              <a href="/notification"> Daha fazlası </a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
