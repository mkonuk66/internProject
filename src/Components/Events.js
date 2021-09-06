import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      <div>
        <h4 className="eventTitle">Etkinlikler</h4>

        <table className="event">
          <a
            href="https://bozok.edu.tr/etkinlik/sertifika-toreni-sefaatlide-kadinlar-kick-boks-yapiyor-saglikli-kaliyor,tr-857.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <tr className="tr">
              <td className="eventDate">
                <cite>01</cite>
                <cite>Ağustos</cite>
              </td>
              <td>
                <p>Sertifika Töreni</p>
              </td>
            </tr>
          </a>

          <br />
          <a
            href="https://bozok.edu.tr/etkinlik/murat-anar-ile-rota-gundem-programinda-yozgat-bozok-universitesi-tercih-gunleri,tr-855.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <tr>
              <td className="eventDate">
                <cite>31</cite>
                <cite>Ağustos</cite>
              </td>
              <td>
                <p>
                  Murat Anar ile Rota Gündem Programında Yozgat Bozok
                  Üniversitesi Tercih Günleri
                </p>
              </td>
            </tr>
          </a>

          <br />
          <a
            href="https://bozok.edu.tr/etkinlik/universitemizde-sosyal-hayat,tr-849.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <tr>
              <td className="eventDate">
                <cite>21</cite>
                <cite>Ağustos</cite>
              </td>

              <td>
                <p>Üniversitemizde Sosyal Hayat</p>
              </td>
            </tr>
          </a>

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
