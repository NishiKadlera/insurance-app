import React from "react";
import "../Styling/HomeInsure.css";
import health from "../assets/health.webp";
import life from "../assets/life.webp";
import inhouse from "../assets/inhouse.webp"
import health1 from "../assets/health1.webp"
import cashless from "../assets/cashless.jpg"
import { Link } from "react-router-dom";

function HealthInsurance()
{
    return(
        <div>
            <div>
     
     <div className="container-fluid Home2">
     <h1 className="Home5"> Health Insurance</h1>
     <h4 className="types">Types of Health Insurance</h4>
 <div className="row Home1">
   <div className="col-md-4">
   {/* <div className="card Home2"> */}
 <img src={health} className="card-img-top Home4 " alt="..."/>
 <div className="card-body">
   <h4 className="card-text types1">HEALTH INSURANCE</h4>
    <center><button className=" btn btn-primary"> <a href="https://rzp.io/i/3DFGiH2" style={{textDecoration:"none", color:"white"}}>Buy</a></button > &nbsp; <button className="btn btn-primary"><a href="claim1" style={{textDecoration:"none", color:"white"}}>Claim Here</a> </button> &nbsp; <button className="btn btn-primary"><a href="renew" style={{textDecoration:"none", color:"white"}}> FAQ's</a></button> </center>
 </div>
{/* </div> */}
   </div>
   <div className="col-md-4">
   {/* <div className="card"> */}
 <img src={life} className="card-img-top Home4" alt="..."/>
 <div className="card-body">
   <h4 className="card-text types1">LIFE INSURANCE</h4>
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
     <img src={inhouse} className="d-block w-100 Home3" alt="..."/>
     <div className="carousel-caption d-none d-md-block">
       <h5 className="carcap">Useful add-ons to customize your policy for total protection</h5>
     </div>
   </div>
   <div className="carousel-item">
     <img src={health1} className="d-block w-100 Home3" alt="..."/>
     <div className="carousel-caption d-none d-md-block">
       <h5 className="carcap">Options of coverage term from 1 day to 5 years</h5>
     </div>
   </div>
   <div className="carousel-item">
     <img src={cashless} className="d-block w-100 Home3" alt="..."/>
     <div className="carousel-caption d-none d-md-block">
       <h5 className="carcap">Cashless claim settlement</h5>
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
        </div>
    )
}
export default HealthInsurance;