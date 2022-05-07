// / import React from 'react'

// export default function Infocard() {
//   return (
//     <div>
// Infocard</div>
//   )
// }

import React from "react";
import Data from "../Data/Services.json";
import "../Styling/Card.css";

const Infocard = () => {
  const InfocardCards = (cards, i) => {
    return (
      <div className="col-md-4">
          <div className="card info" key={i}>            
            <div className=" card-body insure">
             <div className="text-center"><img src={cards.img} className="image" /></div>
             <div className="text-center"><h3 className="card-title">{cards.title}</h3></div>
              <p className="card-text">{cards.Description}</p>
              <p className="card-Benifits"><strong>Benifits:</strong>{cards.Benifits}</p>
                <div className="text-center"><a href="#" className="btn btn-primary">Take Me There</a>  </div> 
            </div>
          </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid mutitle">
        <h1 id="mutitle">Services</h1>
        <div className="row">
          {Data.map(InfocardCards)}
        </div>
      </div>
    </>
  );
};

export default Infocard;
