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

const DetailNotice = (props) => (
  <a href={"/notificationDetail/" + props.notifications._id}>
    {" "}
    <tr>
      <td className="noticeDate">
        <cite>{props.notifications.notificationDate.split("-")[2]}</cite>
        <cite>
          {MonthChanger(props.notifications.notificationDate.split("-")[1])}
        </cite>
      </td>
      <td>
        <p className="allNoticeP">{props.notifications.title}</p>
      </td>
    </tr>
    <br />
  </a>
);

export default class AllNotification extends Component {
  notificationList() {
    let sortedNotification = []
      .concat(this.props.notifications)
      .sort((a, b) => (a.notificationDate < b.notificationDate ? 1 : -1));

    return sortedNotification.map((currentnotifications, i) => {
      return (
        <DetailNotice
          notifications={currentnotifications}
          key={currentnotifications._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="pageDiv"></div>
        <div>
          <Container>
            <h4 className="noticeTitle">Duyurular</h4>

            <table className="notice">{this.notificationList()}</table>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
