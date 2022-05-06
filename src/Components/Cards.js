import React from "react";
import emp from "../Data/Services.json";

const Services=() => {
  const Services1= (record,i) =>
  {
  return (             

            <div className="col-md-4">
              <div className="card" style="width: 18rem;" key={i}>
                <div class="card-body">
                <img src={record.img} class="card-img-top" alt="..." />
                  <div className="card-title">{record.title}</div>
                  <div className="card-des">{record.Designation}</div>
                  <div className="card-benifits">{record.Benifits}</div>
                  <div> <a href="#" class="btn btn-primary">Take Me There</a></div>
                </div>    
              </div>
            </div>
  )
}
return(
  <>
  <div className="container-fluid mutxt">
    <h1 id='mutitle'>Services</h1>
   <i> <p id='mutag'>Get Loans with Attractive ROI and EMI</p></i><br></br>
  <div className='row'>
    {emp.map(Services1)}

    </div>
</div>
</>
  
)

};
export default Services;
