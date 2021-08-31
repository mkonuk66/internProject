import React, { Component } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";

export default class News extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="pageDiv"></div>
        <div>
          <h2 className="newsTitle">Haberler</h2>
          <div class="news">
            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/1.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZ YKS TERCİH DANIŞMA MERKEZİ KURDU
                  </h2>
                  <p class="newsCardSnippet">
                    ÜNİVERSİTEMİZ KIRŞEHİR, SİVAS VE TOKAT'TA YKS TERCİH DANIŞMA
                    MERKEZİ KURDU
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazlası
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/2.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    REKTÖRÜMÜZ ÇAMLIK TV EKRANLARINA KONUK OLDU
                  </h2>
                  <p class="newsCardSnippet">
                    Rektörümüz Prof. Dr. Ahmet Karadağ, Çamlık TV’de yayınlanan
                    "Murat Anar ile Rota Gündem" programına konuk oldu.
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/3.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZDE ÇALIŞTAY DÜZENLENDİ
                  </h2>
                  <p class="newsCardSnippet">
                    Üniversitemiz İle İnfima Holding Aarasında Kenevir Esaslı
                    İşbirliği ve Yol Haritasının Belirlenmesine İlişkin Çalıştay
                    Düzenlendi
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="newsCardSpace" />
            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/1.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZ YKS TERCİH DANIŞMA MERKEZİ KURDU
                  </h2>
                  <p class="newsCardSnippet">
                    ÜNİVERSİTEMİZ KIRŞEHİR, SİVAS VE TOKAT'TA YKS TERCİH DANIŞMA
                    MERKEZİ KURDU
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazlası
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/2.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    REKTÖRÜMÜZ ÇAMLIK TV EKRANLARINA KONUK OLDU
                  </h2>
                  <p class="newsCardSnippet">
                    Rektörümüz Prof. Dr. Ahmet Karadağ, Çamlık TV’de yayınlanan
                    "Murat Anar ile Rota Gündem" programına konuk oldu.
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/3.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZDE ÇALIŞTAY DÜZENLENDİ
                  </h2>
                  <p class="newsCardSnippet">
                    Üniversitemiz İle İnfima Holding Aarasında Kenevir Esaslı
                    İşbirliği ve Yol Haritasının Belirlenmesine İlişkin Çalıştay
                    Düzenlendi
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="newsCardSpace" />
            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/1.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZ YKS TERCİH DANIŞMA MERKEZİ KURDU
                  </h2>
                  <p class="newsCardSnippet">
                    ÜNİVERSİTEMİZ KIRŞEHİR, SİVAS VE TOKAT'TA YKS TERCİH DANIŞMA
                    MERKEZİ KURDU
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazlası
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/2.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    REKTÖRÜMÜZ ÇAMLIK TV EKRANLARINA KONUK OLDU
                  </h2>
                  <p class="newsCardSnippet">
                    Rektörümüz Prof. Dr. Ahmet Karadağ, Çamlık TV’de yayınlanan
                    "Murat Anar ile Rota Gündem" programına konuk oldu.
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="newsCard">
              <figure class="newsCardThumb">
                <img
                  src="./images/news/3.jpg"
                  alt="newsImage"
                  class="newsCardImage"
                />
                <figcaption class="newsCardCaption">
                  <h2 class="newsCardTitle">
                    ÜNİVERSİTEMİZDE ÇALIŞTAY DÜZENLENDİ
                  </h2>
                  <p class="newsCardSnippet">
                    Üniversitemiz İle İnfima Holding Aarasında Kenevir Esaslı
                    İşbirliği ve Yol Haritasının Belirlenmesine İlişkin Çalıştay
                    Düzenlendi
                  </p>
                  <a href="*" class="newsCardButton">
                    Daha Fazla
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
