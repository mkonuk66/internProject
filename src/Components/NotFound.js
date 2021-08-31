import React, { Component } from "react";
import Footer from "./Footer";
import Nav from "./Navbar";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="notFound">404 Not Found!</div>
        <Footer />
      </div>
    );
  }
}
