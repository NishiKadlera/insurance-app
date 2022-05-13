import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';
 
const Insurance=()=> {
  const [data, setData]= useState([]);
  const getdata= async()=>{
    const response=await axios.get("https://localhost:44316/api/Insurances");
    setData(response.data)
  }
  useEffect(()=>{
    getdata()
  },[])

   const Deletedata= async(id)=>{
     alert(id)
    await axios.delete(`https://localhost:44316/api/Insurances/${id}`);
    getdata()
  }

      return (  
        <div>  
        <h4 align="center">My policies</h4>
        <h3>You can perform the CRUD operation here!</h3>
          <table className="table table-bordered tab" style={{ marginTop: 10, backgroundColor: '#0a649d', color:'white',width:'800px', left: '360px',position: 'relative' }}>  
            <thead style={{color:'black'}}>  
              <tr>  
                {/* <th>Id</th>   */}
                <th>Insurance_type</th>  
                <th>Plan_type</th>  
                <th>Amount</th> 
                <th>Payment_Period</th> 
                <th>Buttons</th>
                {/* <th>Password</th>   */}
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody>  
              {data.map((x,i)=>(
                <tr>
                <td>{x.Insurance_type}</td>
                <td>{x.Plan_type}</td>
                <td>{x.Amount}</td>
                <td>{x.Payment_Period}</td>
                <td> <button className='btn btn-primary'><Link to={`/adddetails/${x.id}`} style={{textDecoration:'none',color:'white'}}>Create</Link></button> &nbsp;<button className='btn btn-primary' ><Link to={`/read/${x.id}`} style={{textDecoration:'none',color:'white'}}>Read</Link> </button> &nbsp;<button className='btn btn-primary' > <Link to={`/update/${x.id}`} style={{textDecoration:'none',color:'white'}}>Update</Link> </button> &nbsp;<button className='btn btn-primary' onClick={(e)=>Deletedata(x.id)}>Delete</button></td>
                
                </tr>
              ))}   
            </tbody> 
           
          </table>
          
          {/* < Stupolicy/>  */}
        </div>  
      );  
    }
    export default Insurance; 