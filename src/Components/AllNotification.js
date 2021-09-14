import React, { Component } from "react";
import { Container } from "reactstrap";
import Nav from "./Navbar";
import Footer from "./Footer";

export default class AllNotification extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="pageDiv"></div>
        <div>
          <Container>
            <h4 className="noticeTitle">Duyurular</h4>

            <table className="notice">
              <a
                href="https://bozok.edu.tr/bidb/duyuru/ekim-ayi--siber-guvenlik-farkindalik-ayi,tr-2083.aspx"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <tr className="tr">
                  <td className="noticeDate">
                    <cite>25</cite>
                    <cite>Ağustos</cite>
                  </td>
                  <td>
                    <p className="allNoticeP">
                      Ekim Ayı – Siber Güvenlik Farkındalık Ayı
                    </p>
                  </td>
                </tr>
              </a>

              <br />
              <a
                href="https://bozok.edu.tr/bidb/duyuru/yozgat-bozok-universitesi-yeni-e-posta-sistemine-gecis-hakkinda-duzeltme,tr-2039.aspx"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <tr>
                  <td className="noticeDate">
                    <cite>24</cite>
                    <cite>Ağustos</cite>
                  </td>
                  <td>
                    <p className="allNoticeP">
                      Yozgat Bozok Üniversitesi Yeni E-Posta Sistemine Geçiş
                      Hakkında (Düzeltme)
                    </p>
                  </td>
                </tr>
              </a>

              <br />
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <tr>
                  <td className="noticeDate">
                    <cite>23</cite>
                    <cite>Ağustos</cite>
                  </td>

                  <td>
                    <p className="allNoticeP">
                      Üniversitemiz Antivirüs Programı Hakkında
                    </p>
                  </td>
                </tr>
              </a>
            </table>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
