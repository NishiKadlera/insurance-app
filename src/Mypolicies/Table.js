import React, { Component } from 'react';  
// import axios from 'axios';  
//import { Link } from 'react-router-dom'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
  
  render() {  
    return (  
        <tr>  
          
          <td>  
            {this.props.obj.Insurance_type}  
          </td>  
          <td>  
            {this.props.obj.Plan_type}  
          </td>  
          <td>  
            {this.props.obj.Amount}  
          </td>  
          <td>  
            {this.props.obj.Payment_Period}  
          </td>
         
        </tr>  
    );  
  }  
}  
  
export default Table;  