import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div>
        <h2 className="newsTitle">Haberler</h2>
        <div className="news">
          <div className="newsCard">
            <figure className="newsCardThumb">
              <img
                src="./images/news/1.jpg"
                alt="newsImage"
                className="newsCardImage"
              />
              <figcaption className="newsCardCaption">
                <h2 className="newsCardTitle">
                  ÜNİVERSİTEMİZ YKS TERCİH DANIŞMA MERKEZİ KURDU
                </h2>
                <p className="newsCardSnippet">
                  ÜNİVERSİTEMİZ KIRŞEHİR, SİVAS VE TOKAT'TA YKS TERCİH DANIŞMA
                  MERKEZİ KURDU
                </p>
                <a href="*" className="newsCardButton">
                  Daha Fazlası
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="newsCard">
            <figure className="newsCardThumb">
              <img
                src="./images/news/2.jpg"
                alt="newsImage"
                className="newsCardImage"
              />
              <figcaption className="newsCardCaption">
                <h2 className="newsCardTitle">
                  REKTÖRÜMÜZ ÇAMLIK TV EKRANLARINA KONUK OLDU
                </h2>
                <p className="newsCardSnippet">
                  Rektörümüz Prof. Dr. Ahmet Karadağ, Çamlık TV’de yayınlanan
                  "Murat Anar ile Rota Gündem" programına konuk oldu.
                </p>
                <a href="*" className="newsCardButton">
                  Daha Fazla
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="newsCard">
            <figure className="newsCardThumb">
              <img
                src="./images/news/3.jpg"
                alt="newsImage"
                className="newsCardImage"
              />
              <figcaption className="newsCardCaption">
                <h2 className="newsCardTitle">
                  ÜNİVERSİTEMİZDE ÇALIŞTAY DÜZENLENDİ
                </h2>
                <p className="newsCardSnippet">
                  Üniversitemiz İle İnfima Holding Aarasında Kenevir Esaslı
                  İşbirliği ve Yol Haritasının Belirlenmesine İlişkin Çalıştay
                  Düzenlendi
                </p>
                <a href="*" className="newsCardButton">
                  Daha Fazla
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
        <a href="/news" className="newsCardLink">
          <h2>Daha Fazlası</h2>
        </a>
      </div>
    );
  }
}
