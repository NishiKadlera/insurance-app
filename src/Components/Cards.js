import React from "react";
import emp from "../Data/Services.json";

function Services1() {
  return (
    <div className="col-md-4">
      {emp.map((record, i) => (
        <div key={i}>
          <div className="row">
            <div className="col-md-4">
              <div class="card" style="width: 18rem;">
                <img src={record.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="col-md-4">{record.title}</div>
                  <div className="col-md-4">{record.Designation}</div>
                  <div className="col-md-4">{record.Benifits}</div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Services1;
