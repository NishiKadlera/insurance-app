// / import React from 'react'


// export default function Infocard() {
//   return (
//     <div>
// Infocard</div>
//   )
// }


import React from 'react'
import Data from '../Data/Services.json'
import '../Styling/Card.css';


const Infocard =() => {
  

  const InfocardCards =(cards,i) =>
  {
    return(
      
    
      <div className="col-md-4 Infocard ">
        <center><div className="" key={i}>
          <div className='card info'>
        <img src={cards.img} class="image" />
          <div className=" card-body insure">
                  <h3 className="card-title">{cards.title}</h3>
            <p className="card-text">{cards.Description}</p>
            <p className="card-Benifits"> <strong>Benifits:</strong>{cards.Benifits}</p>
            <center><a href="#" className="btn btn-light">Take Me There</a></center>
          </div>
          </div>
        </div></center>
      </div>  
    )

  }

  return(
    <>
    <div className="container-fluid mutitle">
      <h1 id='mutitle'>Services</h1>

    <div className='row'>
      {Data.map(InfocardCards)}

      </div>
  </div>
  </>
    
  )
}

export default Infocard;
