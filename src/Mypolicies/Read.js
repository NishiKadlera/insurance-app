import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import "../Mypolicies/Studentlist.css";
import { Link, useParams } from 'react-router-dom';

 
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
        <div className=''>  
          <h4 style={{textAlign:'center'}}>Policy Details</h4>  
              {/* {data.map((x,i)=>( */}
                <ul className="list-group box ">
                <li className="list-group-item" style={{backgroundColor:'#0a649d',color:'white'}} >Insurance_type: {data.Insurance_type}</li>
                <li className="list-group-item" style={{backgroundColor:'#0a649d',color:'white'}}>Plan_type: {data.Plan_type}</li>
                <li className="list-group-item" style={{backgroundColor:'#0a649d',color:'white'}}>Amount: {data.Amount}</li>
                <li className="list-group-item" style={{backgroundColor:'#0a649d',color:'white'}}>Payment_Period: {data.Payment_Period}</li>               
                <button className='btn btn-primary' style={{width:'100px',left: '150px',position: 'relative'}}><Link to="/mypolicy" style={{color:'white',textDecoration:'none'}}>Go Back </Link>  </button> 
                </ul><br />
                {/* <button className='btn btn-primary' style={{left: '730px',position: 'relative'}}>Go Back</button>  */}
              {/* ))}    */}
             
        </div>  
      );  
    }
    export default Insurance; 