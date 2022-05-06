import React from "react";
import Home from "../assets/HomeInsure.webp";
import Car from "../assets/CarInsure.jpg";
import Health from "../assets/HealthInsure.webp";



function Carousel() {
  return (
    <div>
      <div className="caro">
  <div className="row caro">
    <div className="col-md-6">
      <div className="caro1">
      Smart insurance using technology to keep your assets safer
      </div>
    </div>
    <div className="col-md-6">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Home} className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Car} className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Health} className="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
</div>
    </div>
  );
}
export default Carousel;
