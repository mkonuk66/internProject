import React, { Component } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";

export default class ComingSoon extends Component {
  render() {
    return (
      <div>
        <Nav />{" "}
        <div
          className="d-flex align-items-center justify-content-center display-1"
          style={{ height: "90vh" }}
        >
          Çok Yakında !
        </div>
        <Footer />
      </div>
    );
  }
}
