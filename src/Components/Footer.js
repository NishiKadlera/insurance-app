import React from "react";
import "../Styling/Footer.css";

function Footer()
{
    return(
        
 <footer className="foot">

    <div className="container-fluid p-0">
    <div className="row text-left">
      <div className="col-md-4">
        <h1>Stay safe with Stay Secure</h1>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter-square"></i>
        <i className="fa-brands fa-whatsapp-square"></i>
      </div>
      <div className="col-md-3">
        <h3>About</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Careers</p>
        <p></p>
        <p></p>
      </div>
      <div className="col-md-3">
        <h3>Info</h3>
        <p>Home Insurance</p>
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