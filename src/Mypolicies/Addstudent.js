import React from 'react';  
 import axios from 'axios'; 
 import "./Addstu.css" 

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',  
Email:'',  
Username:'',  
Password:''  
}  
}   
Addstudent=()=>{  
  axios.post('https://localhost:44316/Api/Insurances', {Insurance_type:this.state.Insurance_type,  
  Plan_type:this.state.Plan_type, Amount:this.state.Amount, Payment_Period:this.state.Payment_Period,})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data Saved Successfully');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">My Policy Details</h4> 
    <div className=''> 
    <Form className="form border">  <br />
      <Col className='border1'>
        <FormGroup row>  
          <Label for="Insurance type" sm={2}>Insurance Type</Label>  
          <Col sm={10}>  
            <Input type="text" name="Insurance_type" onChange={this.handleChange} value={this.state.Insurance_type} placeholder="Enter insurance type" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Plan" sm={2}>Plan Type</Label>  
          <Col sm={10}>  
            <Input type="text" name="Plan_type" onChange={this.handleChange} value={this.state.Plan_type} placeholder="Enter Type of plan" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Amount" sm={2}>Amount</Label>  
          <Col sm={10}>  
            <Input type="text" name="Amount" onChange={this.handleChange} value={this.state.Amount} placeholder="Enter Insurance amount" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Payment" sm={2}>Payment Period</Label>  
          <Col sm={10}>  
            <Input type="text" name="Payment_Period" onChange={this.handleChange} value={this.state.Payment_Period} placeholder="Enter Payment period" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addstudent} className="but">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <button className='but'>Cancel</button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form> <br /> <br />
    </div>
  </Container>  
);  
}  
   
}  
   
export default Addstudent;  