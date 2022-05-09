import React from "react";
import "../Styling/Footer.css";
 import { Link } from "react-router-dom";

function Footer()
{
    return(
        
 <footer className="foot">

    <div className="container-fluid p-0 footer-place"><br />
    <div className="row text-left">
      <div className="col-md-4">
        <h3>Stay Secure</h3>
        <i className="fa-brands fa-instagram font"></i>&nbsp;&nbsp;
        <i className="fa-brands fa-facebook font"></i>&nbsp;&nbsp;
        <i className="fa-brands fa-twitter-square font"></i>&nbsp; &nbsp; &nbsp;
        <i className="fa-brands fa-whatsapp-square font"></i> 
      </div>
      <div className="col-md-3">
        <h3>About</h3>
        <p><Link to="abouts" style={{textDecoration:"none", color:"black"}}>About Us</Link></p> 
        <p>Contact Us</p>
        <p>Careers</p>
        <p></p>
        <p></p>
      </div>
      <div className="col-md-3">
        <h3>Info</h3>
        <Link to="HomeInsurance" style={{textDecoration: "none", color: "black"}}>Home Insurance</Link>
        <p>Vehicle Insurance</p>
        <p>Health Insurance</p>
        <p>Payment Info</p>
      </div>
      <div className="col-md-2">
        <h3>Global sites</h3>
        <p>Terms and Condition</p>
        <p>Privacy policy</p>
        <p></p>
      </div>
    </div>
  </div>

</footer>

    )
}
export default Footer;