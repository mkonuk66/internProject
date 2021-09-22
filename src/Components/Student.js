import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div className="container pageDiv student">
        <h1>Faydalı Linkler</h1>
        <hr />
        <a
          href="https://boysis.bozok.edu.tr/login/"
          className="btn btn-danger btn-lg"
        >
          {" "}
          BOYSİS (Uzaktan Eğitim Sistemi)
        </a>
        <br />
        <a href="https://obs.bozok.edu.tr/" className="btn btn-danger btn-lg">
          {" "}
          Öğrenci Bilgi Sistemi
        </a>
        <br />
        <a
          href="http://bozok.edu.tr//sayfa/Akademik-Takvim,tr-420.aspx"
          className="btn btn-danger btn-lg"
        >
          {" "}
          Akademik Takvim
        </a>
        <br />
        <a
          href="http://kutuphane.bozok.edu.tr/"
          className="btn btn-danger btn-lg"
        >
          {" "}
          Kütüphane
        </a>
        <br />
        <a
          href="https://ogrencihesap.bozok.edu.tr/"
          className="btn btn-danger btn-lg"
        >
          {" "}
          Hesap Oluşturma-Şifre İşlemleri
        </a>
        <br />
        <a href="https://yos.bozok.edu.tr/" className="btn btn-danger btn-lg">
          {" "}
          Yabancı Uyruklu Öğrenci Sınavı (YÖS)
        </a>
        <br />
        <a
          href="https://obs.bozok.edu.tr/ogrenci/ebp/tr/index.html"
          className="btn btn-danger btn-lg"
        >
          {" "}
          Ders Kataloğu
        </a>
        <br />
        <a href="http://mezun.bozok.edu.tr/" className="btn btn-danger btn-lg">
          {" "}
          Mezunlar Birliği
        </a>
        <br />
        <a href="http://aday.bozok.edu.tr/" className="btn btn-danger btn-lg">
          Bozok Tanıtım
        </a>
        <br />
      </div>
    );
  }
}
