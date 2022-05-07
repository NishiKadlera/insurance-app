import React from "react";
import "../Styling/Enquiry.css";

function Enquire() {
  return (
    <div className="container-fluid enquiry"><br /><br /><br />
        <center>
    <div className=" col-md-6 card  ">
        
  <div className="card-body enquiry1">
      <h4>Enquiry Form</h4> 
      <form className="">
      <div>
          <label for="inputName" className="form-label">
            Full Name
          </label>
          <input type="name" className="form-control" id="inputName" />
        </div>
        <div>
          <label for="inputMobile" className="form-label">
            Mobile Number
          </label>
          <input type="mobile" className="form-control" id="inputMobile" />
        </div>
        <div>
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div>
          <label for="inputAddress" className="form-label">
            Your Message
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Type here"
          />
        </div>
        <div><br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>    
    </div>
    </center>
    </div>
  );
}
export default Enquire;
