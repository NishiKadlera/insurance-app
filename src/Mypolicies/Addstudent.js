import React from "react";
import axios from "axios";
import "./Addstu.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Select,
  Option,
} from "reactstrap";
class Addstudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Insurance_type: "",
      Plan_type: "",
      Amount: "",
      Payment_Period: "",
    };
  }

  Addstudent = () => {
    axios
      .post("https://localhost:44316/Api/Insurances", {
        Insurance_type: this.state.Insurance_type,
        Plan_type: this.state.Plan_type,
        Amount: this.state.Amount,
        Payment_Period: this.state.Payment_Period,
      })
      .then((json) => {
        alert("Data Saved Successfully");
        window.location.reload(false);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">My Policy Details</h4>
        <div className="">
          <center>
            <Form className="form border">
              {" "}
              <br />
              <Col className="border1">
                <FormGroup row>
                  {/* <Label for="Insurance type" sm={2}>Insurance Type</Label>   */}
                  <Col sm={10}>
                    <select
                      className="form-control ip"
                      required="required"
                      name="Insurance_type"
                      onChange={this.handleChange}
                      value={this.state.Insurance_type}
                      data-error="Enter insurance type"
                    >
                      <option>--Enter insurance type--</option>
                      <option>Home Insurance</option>
                      <option>Health Insurance</option>
                      <option>Motor Insurance</option>
                      <option>Vehicle Insurance</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  {/* <Label for="Plan" sm={2}>Plan Type</Label>   */}
                  <Col sm={10}>
                    <select
                      type="text"
                      className="form-control ip"
                      required="required"
                      name="Plan_type"
                      onChange={this.handleChange}
                      value={this.state.Plan_type}
                      data-error="Enter Type of plan"
                    >
                      <option>--Enter Plan type--</option>
                      <option>Gold Plan</option>
                      <option>Platinum plan</option>
                      <option>Affordable plan</option>
                      <option>Covid Plan</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  {/* <Label for="Amount" sm={2}>Amount</Label>   */}
                  <Col sm={10}>
                    <Input
                      type="text"
                      className="form ip"
                      name="Amount"
                      onChange={this.handleChange}
                      value={this.state.Amount}
                      placeholder="Enter Insurance amount"
                      style={{ textAlign: "left" }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <select
                      type="text"
                      className="form-control ip"
                      required="required"
                      name="Payment_Period"
                      onChange={this.handleChange}
                      value={this.state.Payment_Period}
                      data-error="Enter Payment period"
                    >
                      <option>--Enter Payment Period--</option>
                      <option>Yearly</option>
                      <option>Half Yearly</option>
                      <option>Quarterly</option>
                      <option>Monthly</option>
                    </select>
                  </Col>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup row>
                  <Col sm={5}></Col>
                  <Col sm={1}>
                    <button
                      type="button"
                      onClick={this.Addstudent}
                      className="but"
                    >
                      <Link
                        to="/mypolicy"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Submit
                      </Link>
                    </button>
                  </Col>{" "}
                  &nbsp; &nbsp; &nbsp;
                  <Col sm={1}>
                    <button className="but">Cancel</button>{" "}
                  </Col>
                  <Col sm={5}></Col>
                </FormGroup>
              </Col>
            </Form>{" "}
            <br /> <br />
          </center>
        </div>
      </Container>
    );
  }
}

export default Addstudent;
