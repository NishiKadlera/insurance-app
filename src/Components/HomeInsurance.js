import React from "react";
import "../Styling/HomeInsure.css";
import Home1 from "../assets/House.webp";
import household from "../assets/household1.webp";
import notepad from "../assets/notepad.webp"
import car from "../assets/car.webp"
import claim from "../assets/claim.webp"
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";


function HomeInsurance() {
  return (
    <div>
     
      <div className="container-fluid Home2">
      <h1 className="Home5"> Home Insurance</h1>
      <h4 className="types">Types of Home Insurance</h4>
  <div className="row Home1">
    <div className="col-md-4">
    {/* <div className="card Home2"> */}
  <img src={Home1} className="card-img-top Home4 " alt="..."/>
  <div className="card-body">
    <h4 className="card-text types1">MY HOME</h4>
     <center><button className=" btn btn-primary"> <a href="https://rzp.io/i/3DFGiH2" style={{textDecoration:"none", color:"white"}}>Buy</a></button > &nbsp; <button className="btn btn-primary"><a href="claim1" style={{textDecoration:"none", color:"white"}}>Claim Here</a> </button> &nbsp; <button className="btn btn-primary"><a href="renew" style={{textDecoration:"none", color:"white"}}> FAQ's</a></button> </center>
  </div>
{/* </div> */}
    </div>
    <div className="col-md-4">
    {/* <div className="card"> */}
  <img src={household} className="card-img-top size Home4" alt="..."/>
  <div className="card-body">
    <h4 className="card-text types1">MY HOUSEHOLDS</h4>
    <center><button className="btn btn-primary"> <a href="https://rzp.io/i/JWHptktM" style={{textDecoration:"none", color:"white"}}>Buy</a></button > &nbsp; <button className="btn btn-primary"><a href="claim1" style={{textDecoration:"none", color:"white"}}>Claim Here</a> </button> &nbsp; <button className="btn btn-primary"><a href="renew" style={{textDecoration:"none", color:"white"}}> FAQ's</a></button> </center>
  </div>
</div>
    {/* </div> */}
    <div className="col-md-4">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={notepad} className="d-block w-100 Home3" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carcap">Useful add-ons to customize your policy for total protection</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car} className="d-block w-100 Home3" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carcap">Options of coverage term from 1 day to 5 years</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={claim} className="d-block w-100 Home3" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carcap">Easy claim settlement</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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
export default HomeInsurance;
