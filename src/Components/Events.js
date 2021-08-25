import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      <div>
        <h4 className="eventTitle">Etkinlikler</h4>

        <table className="event">
          <tr className="tr">
            <td className="eventDate">
              <cite>01</cite>
              <cite>Eylül</cite>
            </td>
            <td>
              <a
                href="https://bozok.edu.tr/etkinlik/sertifika-toreni-sefaatlide-kadinlar-kick-boks-yapiyor-saglikli-kaliyor,tr-857.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Sertifika Töreni
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td className="eventDate">
              <cite>31</cite>
              <cite>Ağustos</cite>
            </td>
            <td>
              <a
                href="https://bozok.edu.tr/etkinlik/murat-anar-ile-rota-gundem-programinda-yozgat-bozok-universitesi-tercih-gunleri,tr-855.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Murat Anar ile Rota Gündem Programında Yozgat Bozok Üniversitesi
                Tercih Günleri
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td className="eventDate">
              <cite>21</cite>
              <cite>Ağustos</cite>
            </td>

            <td>
              <a
                href="https://bozok.edu.tr/etkinlik/universitemizde-sosyal-hayat,tr-849.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Üniversitemizde Sosyal Hayat
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <a href="*"> Daha fazlası </a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
