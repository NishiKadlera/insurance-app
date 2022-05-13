import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate, Link } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

const Update = () => {
let direct = useNavigate();
const {id} = useParams();
  const [data, setData] = useState({
    Insurance_type: '',
    Plan_type: '',
    Amount: '',
    Payment_Period: ''
  }
  )
  const { Insurance_type, Plan_type, Amount, Payment_Period } = data
// https://localhost:44317/Help/Api/GET-api-UserRegistrations
const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
};
const onSubmit =async (e) =>{
  e.preventDefault();
  await axios.put(`https://localhost:44316/api/Insurances/${id}`, data);
  alert('data updated successfully');
  direct('/mypolicy');
}
const updatedata=async() =>{
  const response = await axios.get(`https://localhost:44316/api/Insurances/${id}`);
  setData(response.data)
}
useEffect(()=>{
updatedata()
},[]);
return (
  <Container className="App">
    <div className=''>
    </div>
    <h4 className="PageHeading">Update Policy Details</h4>
    <Form className="form" >
      <Col>
        <FormGroup row>
          <Label for="Insurance_type" sm={2}>Insurance Type</Label>
          <Col sm={10}>
            <Input type="text" name="" onChange={(e) => handleChange(e)} value={Insurance_type} placeholder="Enter Insurance type" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Plan_type" sm={2}>Plan</Label>
          <Col sm={10}>
            <Input type="email" name="Plan_type" onChange={(e) => handleChange(e)} value={Plan_type} placeholder="Enter Plan type" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Amount" sm={2}>Amount</Label>
          <Col sm={10}>
            <Input type="text" name="Amount" onChange={(e) => handleChange(e)} value={Amount} placeholder="Enter Amount" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Payment_Period" sm={2}>Payment Period</Label>
          <Col sm={10}>
            <Input type="text" name="Payment_Period" onChange={(e) => handleChange(e)} value={Payment_Period} placeholder="Enter Period" />
          </Col>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup row>
          <Col sm={5}>
          </Col>
          <Col sm={1}>
            <button type="button" onClick={e=> onSubmit(e)} className="btn btn-primary">Submit </button>
          </Col>
          <Col sm={1}>
            <Button color="btn btn-primary">Cancel</Button>{' '}
          </Col>
          <Col sm={5}>
          </Col>
        </FormGroup>
      </Col>
    </Form>
  </Container>
);
  

}

export default Update;  