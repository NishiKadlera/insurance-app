import React from "react";
import "../Styling/Footer.css";
 import { Link } from "react-router-dom";

function Footer()
{
    return(
        
 <footer className="foot">

    <div className="container-fluid p-0 footer-place"><br />
    <div className="row text-left">
      <div className="col-md-4 ">
        <h3 className="foot1">Stay Secure</h3>
        <i className="fa-brands fa-instagram font foot1"></i>&nbsp;&nbsp;
        <i className="fa-brands fa-facebook font foot1"></i>&nbsp;&nbsp;
        <i className="fa-brands fa-twitter-square font foot1"></i>&nbsp; &nbsp; &nbsp;
        <i className="fa-brands fa-whatsapp-square font foot1"></i> 
      </div>
      <div className="col-md-3 ">
        <h3 className="foot1">About</h3>
        <p className="foot1"><Link to="abouts" style={{textDecoration:"none",color: 'white'}}>About Us</Link></p> 
        <p className="foot1"><Link to="Homeclaim" style={{textDecoration:"none",color: 'white'}}>Contact Us </Link> </p>
        <p className="foot1">Careers</p>
        <p></p>
        <p></p>
      </div>
      <div className="col-md-3">
        <h3 className="foot1">Info</h3>
        <p className="foot1"><Link to="HomeInsurance" style={{textDecoration: "none", color: "white"}}>Home Insurance</Link></p>
        <p className="foot1"><Link to="VehicleInsurance" style={{textDecoration: "none", color: "white"}}>Vehicle Insurance</Link> </p>
        <p className="foot1"><Link to="HealthInsurance" style={{textDecoration: "none", color: "white"}}> Health Insurance</Link></p>
        <p className="foot1">Payment Info</p>
      </div>
      <div className="col-md-2">
        <h3 className="foot1">Global sites</h3>
        <p className="foot1">Terms and Condition</p>
        <p className="foot1">Privacy policy</p>
        <p></p>
      </div>
    </div>
  </div>

</footer>

    )
}
export default Footer;