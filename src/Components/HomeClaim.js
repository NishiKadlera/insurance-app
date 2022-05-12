import React from "react";
import "../Styling/Claim.css"
// import Enquiry from "./Enquire";

function Claim() {
  return (
    <div className="container-fluid">
              <h4 className="heading">Claim your Insurance by reaching us at:</h4><br /><br />
      <div className="row Claim1">
      {/* <div className="col"></div> */}
        <div className="col">
          {/* <div className="card"> */}
            <div className="card-body Phone">
              <h5 className="card-title phone-title"><i className="fa-solid fa-phone phone"></i></h5>
              <h6 className="card-subtitle mb-2 text-muted">Dial our Toll Free Number</h6>
              <p className="card-text">
               1800 200-4567
              </p>
            </div>
          {/* </div> */}
        </div>
        <div className="col">
          {/* <div className="card"> */}
            <div className="card-body Email">
              <h5 className="card-title Email-title"><i className="fa-solid fa-envelope"></i></h5>
              <h6 className="card-subtitle mb-2 text-muted">Email us at:</h6>
              <p className="card-text">
                safesure@gamil.com
              </p>
            </div>
          {/* </div> */}
        </div>
        <div className="col">
          {/* <div className="card"> */}
            <div className="card-body form">
              <h5 className="card-title form-title"><i class="fa-solid fa-pen-to-square"></i></h5>
              <h6 className="card-subtitle mb-2 text-muted">Submit a form:</h6>
              <p className="card-text">
                <button className="btn btn-primary" ><a href="enquire" style={{textDecoration:'none',color:'white'}}>Submit form</a> </button>
              </p>
            </div>
          {/* </div> */}
        </div>
        {/* <div className="col"></div> */}
      </div>
    </div>
  );
}
export default Claim;
