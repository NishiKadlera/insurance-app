import React from 'react'
import reviews from "../Data/CustomerReviews.json";
import "../Styling/Reviews.css";


const Reviews =() => {
  

  const CustomerReviews =(records,i) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card rev" key={i}>
          <div className="card-body rev1">
         <div className="text-center"><img src={records.img} className="img1" /></div>
         <div className="text-center"><h3 className="card-Name">{records.Name}</h3></div>
            <p className="card-Claim">{records.Claim}</p>
            <h4 className="card-Rating">{records.Rating}</h4>
            <p className="card-Message">{records.Message}</p>
          </div>
        </div>
      </div>  
    )
  }

  return(
    <>
    <div className="container-fluid rev2">
      <h1 id='mutitle'>Customer Reviews</h1>
    <div className='row'>
      {reviews.map(CustomerReviews)}

      </div>
  </div>
  </>
    
  )
}

export default Reviews;