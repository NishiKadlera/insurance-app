import React from "react";
import car1 from "../assets/car1.webp";
import car2 from "../assets/car2.webp";
import bike from "../assets/bike.webp";
import truck from "../assets/truck.jpg";


function VehicleInsurance() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <h1>Motor Insurance</h1>
          <div class="col">Column</div>
          <div class="col">
            <div class="card">
              <img src={car1} class="card-img-top pic" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={bike} class="card-img-top pic" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={car2} class="card-img-top pic" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
             <div className="picture"> <img src={truck} class="card-img-top pic" alt="..." /></div>
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}
export default VehicleInsurance;
