import React, { Component } from "react";

export default class Notice extends Component {
  render() {
    return (
      <div>
        <h4 className="noticeTitle">Duyurular</h4>

        <table className="notice">
          <tr className="tr">
            <td className="noticeDate">
              <cite>25</cite>
              <cite>Ağustos</cite>
            </td>
            <td>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/ekim-ayi--siber-guvenlik-farkindalik-ayi,tr-2083.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Ekim Ayı – Siber Güvenlik Farkındalık Ayı
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td className="noticeDate">
              <cite>24</cite>
              <cite>Ağustos</cite>
            </td>
            <td>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/yozgat-bozok-universitesi-yeni-e-posta-sistemine-gecis-hakkinda-duzeltme,tr-2039.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Yozgat Bozok Üniversitesi Yeni E-Posta Sistemine Geçiş Hakkında
                (Düzeltme)
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td className="noticeDate">
              <cite>23</cite>
              <cite>Ağustos</cite>
            </td>

            <td>
              <a
                href="https://bozok.edu.tr/bidb/duyuru/universitemiz-antivirus-programi-hakkinda,tr-2025.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Üniversitemiz Antivirüs Programı Hakkında
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
