import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import "../Mypolicies/Studentlist.css";
import { useParams } from 'react-router-dom';

 
const Insurance=()=> {
  const [data, setData]= useState(
      {
        Insurance_type :'',
        Plan_type:'',
        Amount:'',
        Payment_Period:''
      }
  );
  const getdata= async()=>{
    const response=await axios.get(`https://localhost:44316/api/Insurances/${id}`);
    setData(response.data)
  }
  useEffect(()=>{
    getdata()
  },[])

  const {id}=useParams();
//   alert(id);


      return (  
        <div>  
          <h4>Policy Details</h4>  
              {/* {data.map((x,i)=>( */}
                <ul className="list-group box">
                <li className="list-group-item">Insurance_type: {data.Insurance_type}</li>
                <li className="list-group-item">Plan_type: {data.Plan_type}</li>
                <li className="list-group-item">Amount: {data.Amount}</li>
                <li className="list-group-item">Payment_Period: {data.Payment_Period}</li>                
                </ul>
              {/* ))}    */}
             
        </div>  
      );  
    }
    export default Insurance; 