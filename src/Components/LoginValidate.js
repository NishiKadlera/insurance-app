
import React, { useState,useEffect } from 'react';

function RegistrationForm() {
    const initialvalues={email:"" ,password:""};
    const[data,setData] =useState(initialvalues);
    const[error,setError] =useState({});
    const[isSubmit,setIsSubmit] =useState(false);

    const click=(e) =>{
      setData(e.target.value)
      console.log(e.target.value);
      const {name,value}=e.target;
      setData({...data,[name]:value});
      console.log(data);
    };
  
    const handlesubmit = (e) =>{
      e.preventDefault();
      setError(validate(data));
      setIsSubmit(true);
    };
    
    useEffect(()=>{
      console.log(error);
      if(Object.keys(error).length===0 && isSubmit ){
        console.log(data);
      }
    }, [error]);
    const validate = (values) =>{
      const errors={};
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.email){
        errors.email="Email required!";
      } else if (!regex.test(values.email)){
        errors.email="This email is not valid!"
      }
      if(!values.password){
        errors.password="Password required!";
      } else if (values.password.length <4){
        errors.password="Password must be more than 4 characters";
      }else if (values.password.length >8){
        errors.password="Password cannot exceed more than 8 characters";
      }
      return errors;
      
    } 
    return (
      <div className="login"><br/> <br /> 
       {Object.keys(error).length===0 && isSubmit ? (
       <div className='ui message success'>Signed in Successfully </div>
       ):(
      //  <center> {JSON.stringify(data,undefined,2)}</center>
      <div className='ui message success'> Please enter the details</div>
       ) }
      
        <form onSubmit={handlesubmit} >
        <center>        
          <div className="login1">
          <h2>Login Form</h2>   <br />        
          <div className="field">
            <label><strong>Email</strong> </label> <br />
            <input className='pre' type="email" name="email" value={data.email} onChange={click} placeholder='email' />
          </div>
          <p>{error.email}</p>
          <div className="field">
            <label><strong>Password</strong> </label> <br />
            <input className='pre'  type="password" name="password" value={data.password} onChange={click} placeholder='password' />
          </div>
          <p>{error.password}</p>
           <button className='btn btn-primary'>submit</button>  
          </div>
        </center>
        </form>
      </div>
      
    )
  }
  
  export default RegistrationForm;