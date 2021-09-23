import React, { Component } from "react";

const SliderAdminList = (props) => (
  <tr>
    <th scope="row">{props.sliders._id}</th>
    <td>{props.sliders.title}</td>
    <td>{props.sliders.sliderImage.name}</td>
    <td>{props.sliders.createdAt}</td>
    <td>
      <a href={"/adminEditSlider/" + props.sliders._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <button
        onClick={() => {
          props.deleteSlider(props.sliders._id);
          alert(props.sliders.title + " adlı slider silindi.");
        }}
        style={{ border: "0px", backgroundColor: "transparent" }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </button>
    </td>
  </tr>
);

export default class AdminSlider extends Component {
  sliderList() {
    return this.props.sliders.map((currentslider) => {
      return (
        <SliderAdminList
          sliders={currentslider}
          key={currentslider._id}
          deleteSlider={this.props.deleteSlider}
        />
      );
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-3">
          Slider Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center column mb-4">
          <a
            href="/adminDashboard"
            className="  btn btn-warning  btn-lg p-2 m-2 "
          >
            Geri Dön
          </a>
          <a
            href="/adminSliderNew"
            className=" btn btn-warning  btn-lg p-2 m-2"
          >
            Slider Ekle
          </a>
        </div>
        <table className="table">
          <caption>Slider Listesi</caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Slider Başlık</th>
              <th scope="col">Slider Fotoğraf Adı</th>
              <th scope="col">Slider Oluşturma Tarihi</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.sliderList()}</tbody>
        </table>
      </div>
    );
  }
}
