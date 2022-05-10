import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table'; 
// import Stupolicy from "./Addstudent";
// import 'bootstrap/dist/css/bootstrap.css'; 
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44316/Api/Insurances')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">My policies</h4>  
          <table className="table table-bordered tab" style={{ marginTop: 10, backgroundColor: '#0a649d', color:'white' }}>  
            <thead style={{color:'black'}}>  
              <tr>  
                {/* <th>Id</th>   */}
                <th>Insurance_type</th>  
                <th>Plan_type</th>  
                <th>Amount</th> 
                <th>Payment_Period</th> 
                {/* <th>Password</th>   */}
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>
          {/* < Stupolicy/>  */}
        </div>  
      );  
    }  
  }  