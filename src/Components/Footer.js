import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerBlock">
          <div>
            <Link to="/">
              <img src="./images/logo.png" alt="footerLogo" />
            </Link>
          </div>
          <div className="footerLinkBlock">
            <div className="footerContact">
              İletişim
              <hr />
              <p>
                Telefon :{" "}
                <a href="tel:03542178991" target="_blank" rel="noreferrer">
                  <span>0 (354) 217 89 91</span>
                </a>
              </p>
              <p>
                Faks :
                <a href="tel:03542121193" target="_blank" rel="noreferrer">
                  <span>0 (354) 212 11 93</span>
                </a>
              </p>
              <p>
                E-Posta :{" "}
                <a
                  href="mailto:genel.sekreterlik@bozok.edu.tr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>genel.sekreterlik@bozok.edu.tr</span>
                </a>
              </p>
              <p>
                Rektörlük :{" "}
                <a
                  href="https://www.google.com.tr/maps/place/Yozgat+Bozok+%C3%9Cniversitesi/@39.7990772,34.8249965,13z/data=!4m5!3m4!1s0x40807a04b648cfcd:0x394c4977d5ea23d5!8m2!3d39.7765263!4d34.8005086"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <span>
                    Erdoğan Akdağ Kampüsü Atatürk Yolu 7. Km 66900 YOZGAT
                  </span>
                </a>
              </p>
            </div>
            <div className="footerSocial">
              Sosyal Medya
              <hr />
              <a
                href="https://www.facebook.com/bozokedutr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook fa-2x "></i>
              </a>
              <a
                href="https://www.instagram.com/bozokedutr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com/bozokedutr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.youtube.com//user/BozokUniversitesi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
