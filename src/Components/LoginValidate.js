
import React, { useState,useEffect } from 'react';

function RegistrationForm() {
    const initialvalues={username:"",email:"" ,password:""};
    const[data,setData] =useState(initialvalues);
    const[error,setError] =useState({});
    const[isSubmit,setIsSubmit] =useState(false);
  
    const handlesubmit = (e) =>{
      e.preventDefault();
      setError(validate(data));
      setIsSubmit(true)
    }
    const click=(e) =>{
      setData(e.target.value)
      console.log(e.target.value);
      const {name,value}=e.target;
      setData({...data,[name]:value});
      console.log(data);
    }
    useEffect(()=>{
      console.log(error)
      if(Object.keys(error).length===0 && isSubmit ){
        console.log(data);
      }
    })
    const validate = (values) =>{
      const errors={};
      const regex=/^[^\s@]+@[^\s$]+$/;
      if(!values.email){
        errors.email="Email required"
      } 
      if(!values.password){
        errors.password="password required"
      }
      return errors;
      
    }
    return (
      <div className="login"><br/>  
        <form onSubmit={handlesubmit} >
        <center>        
          <div className="login1">
          <h1 >Login</h1>   <br />        
          <div className="field">
            <label htmlFor=""><strong>Email</strong> </label> <br />
            <input className='pre' type="email" name="email" id="" value={data.email} onChange={click} placeholder='email' />
          </div>
          <p>{error.email}</p>
          <div className="field">
            <label htmlFor="" className='label'><strong>password</strong> </label> <br />
            <input className='pre'  type="password" name="password" value={data.password} onChange={click} id="" placeholder='password' />
          </div>
          <p>{error.password}</p>
          <div>
           <button className='btn btn-primary'>submit</button>  
          </div>
          </div>
        </center>
        </form>
      </div>
    )
  }
  
  export default RegistrationForm;